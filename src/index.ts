import { MikroORM } from "@mikro-orm/core"

import { __prod__ } from "./constants"
import { Expense } from "./entities/Expense"
import ormConfig from "./mikro-orm.config"

const main = async () => {
  const orm = await MikroORM.init(ormConfig)
  await orm.getMigrator().up()

  // const expense = orm.em.create(Expense, { value: 13.3 })
  // orm.em.persistAndFlush(expense)

  // const expense = await orm.em.find(Expense, {})
  // console.log(expense)
}

main().catch(err => {
  console.error(err)
})
