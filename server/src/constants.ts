export const __prod__ = process.env.NODE_ENV !== "production"
export const __port__ = process.env.PORT || 4000
export const COOKIE_NAME = "qid"
export const FORGET_PASSWORD_PREFIX = "forget-password:"
export const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE || "expensio"
export const POSTGRES_USERNAME = process.env.POSTGRES_USERNAME || "owner"
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || "postgres"
