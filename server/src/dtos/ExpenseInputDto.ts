import { Field, InputType } from "type-graphql"

@InputType()
export class ExpenseInputDto {
  @Field()
  value: number
}
