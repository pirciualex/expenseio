import { MikroORM } from "@mikro-orm/core";

import { __prod__ } from "./constants";
import { Expense } from "./entities/Expense";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Expense],
    dbName: "expenseio",
    user: "owner",
    password: "postgres",
    type: "postgresql",
    debug: !__prod__,
  });

  const post = orm.em.create(Expense, { value: 13.3 });
  orm.em.persistAndFlush(post);
};

main().catch((err) => {
  console.error(err);
});
