import { DbContext } from "src/types"
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import { Expense } from "../entities/Expense"
import { ExpenseResponseDto } from "../dtos/ExpenseDto"
import { ExpenseDeletedDto } from "../dtos/ExpenseDeletedDto"

@Resolver()
export class ExpenseResolver {
  @Query(() => [Expense!]!)
  expenses(@Ctx() { em }: DbContext): Promise<Expense[]> {
    return em.find(Expense, {})
  }

  @Query(() => ExpenseResponseDto)
  async expense(
    @Arg("id") id: number,
    @Ctx() { em }: DbContext
  ): Promise<ExpenseResponseDto> {
    const expense = await em.findOne(Expense, { id })
    if (!expense) {
      return {
        errors: [
          {
            field: "expense",
            message: "Expense not found!",
          },
        ],
      }
    }
    return { expense }
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

  @Mutation(() => ExpenseResponseDto)
  async updateExpense(
    @Arg("id") id: number,
    @Arg("value") value: number,
    @Ctx() { em }: DbContext
  ): Promise<ExpenseResponseDto> {
    const expense = await em.findOne(Expense, { id })
    if (!expense) {
      return {
        errors: [
          {
            field: "expense",
            message: "Expense not found!",
          },
        ],
      }
    }
    expense.value = value
    return { expense }
  }

  @Mutation(() => ExpenseDeletedDto)
  async deleteExpense(
    @Arg("id") id: number,
    @Ctx() { em }: DbContext
  ): Promise<ExpenseDeletedDto> {
    const expense = await em.findOne(Expense, { id })
    if (!expense) {
      return {
        errors: [
          {
            field: "expense",
            message: "Expense not found!",
          },
        ],
      }
    }
    await em.nativeDelete(Expense, { id })
    return { deleted: true }
  }
}
