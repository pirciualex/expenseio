import { DbContext } from "src/types"
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import { Expense } from "../entities/Expense"

@Resolver()
export class ExpenseResolver {
  @Query(() => [Expense!]!)
  expenses(@Ctx() { em }: DbContext): Promise<Expense[]> {
    return em.find(Expense, {})
  }

  @Query(() => Expense)
  async expense(
    @Arg("id") id: number,
    @Ctx() { em }: DbContext
  ): Promise<Expense> {
    const expense = await em.findOne(Expense, { id })
    if (!expense) {
      throw new Error("Expense not found!")
    }
    return expense
  }

  @Mutation(() => Expense)
  async createExpense(
    @Arg("value") value: number,
    @Ctx() { em }: DbContext
  ): Promise<Expense | null> {
    const expense = em.create(Expense, { value })
    await em.persistAndFlush(expense)
    return expense
  }

  @Mutation(() => Expense)
  async updateExpense(
    @Arg("id") id: number,
    @Arg("value") value: number,
    @Ctx() { em }: DbContext
  ): Promise<Expense> {
    const expense = await em.findOne(Expense, { id })
    if (!expense) {
      throw new Error("Expense not found!")
    }
    expense.value = value
    return expense
  }

  @Mutation(() => Boolean)
  async deleteExpense(
    @Arg("id") id: number,
    @Ctx() { em }: DbContext
  ): Promise<boolean> {
    const expense = await em.findOne(Expense, { id })
    if (!expense) {
      throw new Error("Expense not found!")
    }
    await em.nativeDelete(Expense, { id })
    return true
  }
}
