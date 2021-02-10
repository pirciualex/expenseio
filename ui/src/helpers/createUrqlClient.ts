import { cacheExchange } from "@urql/exchange-graphcache"
import { dedupExchange, fetchExchange } from "urql"
import {
  LoginMutation,
  MeQuery,
  MeDocument,
  LogoutMutation,
  RegisterMutation,
} from "../generated/graphql"
import { customUpdateQuery } from "./customUpdateQuery"

export const createUrqlClient = (ssrExchange: any) => ({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include" as const,
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          login: (_result, _args, cache, _info) => {
            customUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.login.errors) {
                  return query
                } else {
                  return {
                    me: result.login.user,
                  }
                }
              }
            )
          },
          logout: (_result, _args, cache, _info) => {
            customUpdateQuery<LogoutMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              () => ({
                me: null,
              })
            )
          },
          register: (_result, _args, cache, _info) => {
            customUpdateQuery<RegisterMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.register.errors) {
                  return query
                } else {
                  return {
                    me: result.register.user,
                  }
                }
              }
            )
          },
        },
      },
    }),
    ssrExchange,
    fetchExchange,
  ],
})
