import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql"

import { ExpenseDeletedDto } from "../dtos/ExpenseDeletedDto"
import { ExpenseResponseDto } from "../dtos/ExpenseDto"
import { ExpenseInputDto } from "../dtos/ExpenseInputDto"
import { Expense } from "../entities/Expense"
import { isAuth } from "../middleware/isAuth"
import { DbContext } from "../types"

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
  @UseMiddleware(isAuth)
  async createExpense(
    @Arg("input") input: ExpenseInputDto,
    @Ctx() { req }: DbContext
  ): Promise<Expense | null> {
    return Expense.create({
      ...input,
      userId: req.session.userId,
    }).save()
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
