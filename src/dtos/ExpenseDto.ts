import { ObjectType, Field } from "type-graphql"
import { FieldError } from "./FieldError"
import { Expense } from "../entities/Expense"

@ObjectType()
export class ExpenseResponseDto {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]

  @Field(() => Expense, { nullable: true })
  expense?: Expense
}
