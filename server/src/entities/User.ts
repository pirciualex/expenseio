import { Field, ObjectType } from "type-graphql"
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { Expense } from "./Expense"

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date

  @Field()
  @Column({ unique: true })
  email!: string

  @Field()
  @Column({ unique: true })
  username!: string

  @Column()
  password!: string

  @OneToMany(() => Expense, expense => expense.user)
  expenses: Expense[]
}
