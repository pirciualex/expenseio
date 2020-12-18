import { MikroORM } from "@mikro-orm/core"
import path from "path"
import { __prod__ } from "./constants"
import { Expense } from "./entities/Expense"

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Expense],
  dbName: "expenseio",
  user: "owner",
  password: "postgres",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]