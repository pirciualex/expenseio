import { Arg, Mutation, Query, Resolver } from "type-graphql"

import { ExpenseDeletedDto } from "../dtos/ExpenseDeletedDto"
import { ExpenseResponseDto } from "../dtos/ExpenseDto"
import { Expense } from "../entities/Expense"

@Resolver()
export class ExpenseResolver {
  @Query(() => [Expense!]!)
  expenses(): Promise<Expense[]> {
    return Expense.find()
  }

  @Query(() => ExpenseResponseDto)
  async expense(@Arg("id") id: number): Promise<ExpenseResponseDto> {
    const expense = await Expense.findOne(id)
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
  async createExpense(@Arg("value") value: number): Promise<Expense | null> {
    return Expense.create({ value }).save()
  }

  @Mutation(() => ExpenseResponseDto)
  async updateExpense(
    @Arg("id") id: number,
    @Arg("value") value: number
  ): Promise<ExpenseResponseDto> {
    const expense = await Expense.findOne(id)
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

    await Expense.update({ id }, { value })
    return { expense }
  }

  @Mutation(() => ExpenseDeletedDto)
  async deleteExpense(@Arg("id") id: number): Promise<ExpenseDeletedDto> {
    const expense = await Expense.findOne(id)
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
    await Expense.delete(id)
    return { deleted: true }
  }
}
