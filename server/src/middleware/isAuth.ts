import { DbContext } from "src/types"
import { MiddlewareFn } from "type-graphql"

export const isAuth: MiddlewareFn<DbContext> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error("Sorry, but you are not authorized for this!")
  }

  return next()
}
