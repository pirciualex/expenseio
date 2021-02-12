import argon2 from "argon2"
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import { getConnection } from "typeorm"
import { v4 } from "uuid"

import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants"
import { ChangePasswordInput } from "../dtos/ChangePasswordInput"
import { LoginUserInput } from "../dtos/LoginUserInput"
import { RegisterUserInput } from "../dtos/RegisterUserInput"
import { UserResponseDto } from "../dtos/UserResponseDto"
import { User } from "../entities/User"
import { sendEmail } from "../helpers/sendEmail"
import { validateChangePassword } from "../helpers/validateChangePassword"
import { validateRegister } from "../helpers/validateRegister"
import { DbContext } from "../types"

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: DbContext) {
    // you are not logged in
    if (!req.session.userId) {
      return null
    }

    return User.findOne(req.session.userId)
  }

  @Mutation(() => UserResponseDto)
  async register(
    @Arg("input") input: RegisterUserInput,
    @Ctx() { req }: DbContext
  ): Promise<UserResponseDto> {
    const errors = validateRegister(input)
    if (errors) {
      return { errors }
    }

    const hashedPassword = await argon2.hash(input.password)
    let user
    try {
      // user = await User.create({
      //   email: input.email,
      //   username: input.username,
      //   password: hashedPassword,
      // }).save()
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          email: input.email,
          username: input.username,
          password: hashedPassword,
        })
        .returning("*")
        .execute()
      user = result.raw[0]
      console.log("user: " + user)
    } catch (err) {
      if (err.code === "23505") {
        // || err.detail.includes("already exists")){
        // duplicate name error
        return {
          errors: [
            {
              field: "username",
              message: "Username already taken!",
            },
          ],
        }
      }
      console.log(err.message)
    }

    req.session.userId = user.id

    return { user }
  }

  @Mutation(() => UserResponseDto)
  async login(
    @Arg("input") input: LoginUserInput,
    @Ctx() { req }: DbContext
  ): Promise<UserResponseDto> {
    const user = await User.findOne(
      input.usernameOrEmail.includes("@")
        ? { where: { email: input.usernameOrEmail } }
        : { where: { username: input.usernameOrEmail } }
    )
    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "User provided doesn't exist!",
          },
        ],
      }
    }

    const valid = await argon2.verify(user.password, input.password)
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "Incorrect password!",
          },
        ],
      }
    }

    req.session.userId = user.id

    return { user }
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: DbContext): Promise<Boolean> {
    return new Promise(resolve =>
      req.session.destroy(err => {
        res.clearCookie(COOKIE_NAME)
        if (err) {
          console.log(err)
          resolve(false)
          return
        }
        resolve(true)
      })
    )
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: DbContext
  ): Promise<Boolean> {
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return true
    }

    const token = v4()
    redis.set(FORGET_PASSWORD_PREFIX + token, user.id, "ex", 1000 * 60 * 60 * 3)
    await sendEmail(
      email,
      `<a href="http://localhost:3000/change-password/${token}">Change password</a>`
    )
    return true
  }

  @Mutation(() => UserResponseDto)
  async changePassword(
    @Arg("input") input: ChangePasswordInput,
    @Ctx() { redis }: DbContext
  ): Promise<UserResponseDto> {
    const errors = validateChangePassword(input)
    if (errors) {
      return { errors }
    }

    const key = FORGET_PASSWORD_PREFIX + input.token
    const userId = await redis.get(key)
    if (!userId) {
      return {
        errors: [
          {
            field: "token",
            message: "Token has expired!",
          },
        ],
      }
    }

    const id = parseInt(userId)
    const user = await User.findOne(id)
    if (!user) {
      return {
        errors: [
          {
            field: "token",
            message: "User does not exist!",
          },
        ],
      }
    }

    await User.update(
      { id },
      { password: await argon2.hash(input.newPassword) }
    )
    await redis.del(key)

    return { user }
  }
}
