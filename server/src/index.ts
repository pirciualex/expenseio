import { MikroORM } from "@mikro-orm/core"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import connectRedis from "connect-redis"
import cors from "cors"
import express from "express"
import Redis from "ioredis"
import session from "express-session"

import { COOKIE_NAME, __port__, __prod__ } from "./constants"
import { HelloResolver } from "./resolvers/hello"
import ormConfig from "./mikro-orm.config"
import { ExpenseResolver } from "./resolvers/expense"
import { UserResolver } from "./resolvers/user"
import { DbContext } from "./types"

const main = async () => {
  const orm = await MikroORM.init(ormConfig)
  await orm.getMigrator().up()

  const app = express()

  const RedisStore = connectRedis(session)
  const redis = new Redis()

  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  }
  app.use(cors(corsOptions))

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redis as any, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, //30 days
        httpOnly: true,
        sameSite: "lax", // csrf
        //secure: __prod__, // only on https
      },
      saveUninitialized: false,
      secret: "secret",
      resave: false,
    })
  )

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ExpenseResolver, HelloResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): DbContext => ({ em: orm.em, req, res, redis }),
  })

  apolloServer.applyMiddleware({
    app,
    cors: false,
  })

  app.listen(__port__, () => {
    console.log(`server started on port ${__port__}`)
  })
}

main().catch(err => {
  console.error(err)
})
