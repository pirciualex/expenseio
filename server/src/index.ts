import { ApolloServer } from "apollo-server-express"
import connectRedis from "connect-redis"
import cors from "cors"
import express from "express"
import session from "express-session"
import Redis from "ioredis"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { createConnection } from "typeorm"

import {
  COOKIE_NAME,
  POSTGRES_DATABASE,
  POSTGRES_PASSWORD,
  POSTGRES_USERNAME,
  __port__,
} from "./constants"
import { Expense } from "./entities/Expense"
import { User } from "./entities/User"
import { ExpenseResolver } from "./resolvers/expense"
import { HelloResolver } from "./resolvers/hello"
import { UserResolver } from "./resolvers/user"

const main = async () => {
  await createConnection({
    type: "postgres",
    database: POSTGRES_DATABASE,
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    logging: true,
    synchronize: true,
    entities: [Expense, User],
  })

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
        maxAge: 1000 * 60 * 60 * 24 * 60, //60 days
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
    context: ({ req, res }) => ({ req, res, redis }),
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
