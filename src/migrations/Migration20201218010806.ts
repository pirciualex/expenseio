import { Migration } from '@mikro-orm/migrations';

export class Migration20201218010806 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "expense" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "value" float not null);');
  }

}
