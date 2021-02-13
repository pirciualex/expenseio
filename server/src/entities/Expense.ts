import { Field, ObjectType } from "type-graphql"
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { User } from "./User"

@ObjectType()
@Entity()
export class Expense extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  userId: number

  @Field(() => String)
  @UpdateDateColumn()
  createdAt: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date

  @Field()
  @Column({ type: "decimal" })
  value!: number

  @ManyToOne(() => User, user => user.expenses)
  user: User
}
