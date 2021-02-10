import argon2 from "argon2"
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"

import { COOKIE_NAME } from "../constants"
import { LoginUserInput } from "../dtos/LoginUserInput"
import { RegisterUserInput } from "../dtos/RegisterUserInput"
import { UserResponseDto } from "../dtos/UserResponseDto"
import { User } from "../entities/User"
import { validateRegister } from "../helpers/validateRegister"
// import { EntityManager } from "@mikro-orm/postgresql"
import { DbContext } from "../types"

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: DbContext) {
    // you are not logged in
    if (!req.session.userId) {
      return null
    }

    const user = await em.findOne(User, { id: req.session.userId })
    return user
  }

  @Mutation(() => UserResponseDto)
  async register(
    @Arg("input") input: RegisterUserInput,
    @Ctx() { em, req }: DbContext
  ): Promise<UserResponseDto> {
    const errors = validateRegister(input)
    if (errors) {
      return { errors }
    }

    const hashedPassword = await argon2.hash(input.password)
    const user = em.create(User, {
      email: input.email,
      username: input.username,
      password: hashedPassword,
    })
    // !using query builder results in user not having dates set up correctly
    // let user
    try {
      // const result = await (em as EntityManager)
      //   .createQueryBuilder(User)
      //   .getKnexQuery()
      //   .insert({
      //     email: input.email,
      //     username: input.username,
      //     password: hashedPassword,
      //     created_at: new Date(),
      //     updated_at: new Date(),
      //   })
      //   .returning("*")

      // user = result[0]
      await em.persistAndFlush(user)
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
    @Ctx() { em, req }: DbContext
  ): Promise<UserResponseDto> {
    const user = await em.findOne(
      User,
      input.usernameOrEmail.includes("@")
        ? { email: input.usernameOrEmail }
        : { username: input.usernameOrEmail }
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
}
