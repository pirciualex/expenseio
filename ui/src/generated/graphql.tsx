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
  email: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createExpense: Expense;
  updateExpense: ExpenseResponseDto;
  deleteExpense: ExpenseDeletedDto;
  register: UserResponseDto;
  login: UserResponseDto;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponseDto;
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
  input: RegisterUserInput;
};


export type MutationLoginArgs = {
  input: LoginUserInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
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

export type RegisterUserInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserInput = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type ChangePasswordInput = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
  confirmNewPassword: Scalars['String'];
};

export type BasicErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type BasicUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponseDto' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & BasicUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & BasicErrorFragment
    )>> }
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponseDto' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & BasicUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & BasicErrorFragment
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponseDto' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & BasicUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & BasicErrorFragment
    )>> }
  ) }
);

export type ExpensesQueryVariables = Exact<{ [key: string]: never; }>;


export type ExpensesQuery = (
  { __typename?: 'Query' }
  & { expenses: Array<(
    { __typename?: 'Expense' }
    & Pick<Expense, 'id' | 'createdAt' | 'updatedAt' | 'value'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & BasicUserFragment
  )> }
);

export const BasicErrorFragmentDoc = gql`
    fragment BasicError on FieldError {
  field
  message
}
    `;
export const BasicUserFragmentDoc = gql`
    fragment BasicUser on User {
  id
  username
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($input: ChangePasswordInput!) {
  changePassword(input: $input) {
    user {
      ...BasicUser
    }
    errors {
      ...BasicError
    }
  }
}
    ${BasicUserFragmentDoc}
${BasicErrorFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($input: LoginUserInput!) {
  login(input: $input) {
    user {
      ...BasicUser
    }
    errors {
      ...BasicError
    }
  }
}
    ${BasicUserFragmentDoc}
${BasicErrorFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($input: RegisterUserInput!) {
  register(input: $input) {
    user {
      ...BasicUser
    }
    errors {
      ...BasicError
    }
  }
}
    ${BasicUserFragmentDoc}
${BasicErrorFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const ExpensesDocument = gql`
    query Expenses {
  expenses {
    id
    createdAt
    updatedAt
    value
  }
}
    `;

export function useExpensesQuery(options: Omit<Urql.UseQueryArgs<ExpensesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ExpensesQuery>({ query: ExpensesDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...BasicUser
  }
}
    ${BasicUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};