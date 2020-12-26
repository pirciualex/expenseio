import { MikroORM } from "@mikro-orm/core"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import express from "express"

import { __port__, __prod__ } from "./constants"
import { HelloResolver } from "./resolvers/hello"
import ormConfig from "./mikro-orm.config"
import { ExpenseResolver } from "./resolvers/expense"
import { UserResolver } from "./resolvers/user"

const main = async () => {
  const orm = await MikroORM.init(ormConfig)
  await orm.getMigrator().up()

  const app = express()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ExpenseResolver, HelloResolver, UserResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  })

  apolloServer.applyMiddleware({ app })

  app.listen(__port__, () => {
    console.log(`server started on port ${__port__}`)
  })
}

main().catch(err => {
  console.error(err)
})
