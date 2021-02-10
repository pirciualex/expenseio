import { Field, InputType } from "type-graphql"

@InputType()
export class RegisterUserInput {
  @Field()
  email: string
  @Field()
  username: string
  @Field()
  password: string
}
