import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  expenses: Array<Expense>;
  expense: ExpenseResponseDto;
  me?: Maybe<User>;
};


export type QueryExpenseArgs = {
  id: Scalars['Float'];
};

export type Expense = {
  __typename?: 'Expense';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  value: Scalars['Float'];
};

export type ExpenseResponseDto = {
  __typename?: 'ExpenseResponseDto';
  errors?: Maybe<Array<FieldError>>;
  expense?: Maybe<Expense>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createExpense: Expense;
  updateExpense: ExpenseResponseDto;
  deleteExpense: ExpenseDeletedDto;
  register: UserResponseDto;
  login: UserResponseDto;
};


export type MutationCreateExpenseArgs = {
  value: Scalars['Float'];
};


export type MutationUpdateExpenseArgs = {
  value: Scalars['Float'];
  id: Scalars['Float'];
};


export type MutationDeleteExpenseArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  input: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  input: UsernamePasswordInput;
};

export type ExpenseDeletedDto = {
  __typename?: 'ExpenseDeletedDto';
  errors?: Maybe<Array<FieldError>>;
  deleted?: Maybe<Scalars['Boolean']>;
};

export type UserResponseDto = {
  __typename?: 'UserResponseDto';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponseDto' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'createdAt' | 'updatedAt' | 'username'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);


export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(input: {username: $username, password: $password}) {
    user {
      id
      createdAt
      updatedAt
      username
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};