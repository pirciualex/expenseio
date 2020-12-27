import { Arg, Ctx, Field, InputType, Mutation, Resolver } from "type-graphql"
import argon2 from "argon2"
import { DbContext } from "../types"
import { User } from "../entities/User"
import { UserResponseDto } from "../dtos/UserResponseDto"

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string
  @Field()
  password: string
}

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponseDto)
  async register(
    @Arg("input") input: UsernamePasswordInput,
    @Ctx() { em }: DbContext
  ): Promise<UserResponseDto> {
    if (input.username.length <= 3) {
      return {
        errors: [
          {
            field: "username",
            message: "Length must be greater than 3!",
          },
        ],
      }
    }

    if (input.password.length <= 3) {
      return {
        errors: [
          {
            field: "password",
            message: "Length must be greater than 3!",
          },
        ],
      }
    }

    const hashedPassword = await argon2.hash(input.password)
    const user = em.create(User, {
      username: input.username,
      password: hashedPassword,
    })
    try {
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
    return { user }
  }

  @Mutation(() => UserResponseDto)
  async login(
    @Arg("input") input: UsernamePasswordInput,
    @Ctx() { em }: DbContext
  ): Promise<UserResponseDto> {
    const user = await em.findOne(User, { username: input.username })
    if (!user) {
      return {
        errors: [
          {
            field: "username",
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
    return { user }
  }
}
