import { DbContext } from "src/types"
import { Ctx, Query, Resolver } from "type-graphql"
import { Expense } from "../entities/Expense"

@Resolver()
export class ExpenseResolver {
  @Query(() => [Expense!]!)
  expense(@Ctx() { em }: DbContext): Promise<Expense[]> {
    return em.find(Expense, {})
  }
}
