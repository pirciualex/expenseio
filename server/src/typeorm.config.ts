import { ConnectionOptions } from "typeorm/connection/ConnectionOptions"
import {
  POSTGRES_DATABASE,
  POSTGRES_PASSWORD,
  POSTGRES_USERNAME,
} from "./constants"

export default {
  type: "postgres",
  database: POSTGRES_DATABASE,
  username: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
  logging: true,
  entities: [],
} as ConnectionOptions
