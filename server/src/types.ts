import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core"
import { Request, Response } from "express"
import { SessionData } from "express-session"
import { Redis } from "ioredis"

export type DbContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
  req: Request & { session: Partial<SessionData> & { userId?: number } }
  res: Response
  redis: Redis
}
