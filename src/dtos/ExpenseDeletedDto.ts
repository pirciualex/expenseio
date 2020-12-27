import { ObjectType, Field } from "type-graphql"
import { FieldError } from "./FieldError"

@ObjectType()
export class ExpenseDeletedDto {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]

  @Field(() => Boolean, { nullable: true })
  deleted?: Boolean
}
