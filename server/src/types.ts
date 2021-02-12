import { Request, Response } from "express"
import { SessionData } from "express-session"
import { Redis } from "ioredis"

export type DbContext = {
  req: Request & { session: Partial<SessionData> & { userId?: number } }
  res: Response
  redis: Redis
}
