import { withUrqlClient } from "next-urql"
import React from "react"

import Loader from "../components/Loader"
import { useExpensesQuery } from "../generated/graphql"
import { createUrqlClient } from "../helpers/createUrqlClient"

const Index = () => {
  const [{ data }] = useExpensesQuery()

  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        data.expenses.map(expense => (
          <div key={expense.id}>{expense.value}</div>
        ))
      )}
    </>
  )
}

export default withUrqlClient(createUrqlClient)(Index)
