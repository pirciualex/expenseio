import { Box, Button } from "@chakra-ui/react"
import { Formik, Form } from "formik"
import { withUrqlClient } from "next-urql"
import React, { useState } from "react"

import InputField from "../components/InputField"
import Wrapper from "../components/Wrapper"
import { useForgotPasswordMutation } from "../generated/graphql"
import { createUrqlClient } from "../helpers/createUrqlClient"

const ForgotPassword: React.FC<{}> = () => {
  const [complete, setComplete] = useState(false)
  const [, forgotPassword] = useForgotPasswordMutation()

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async values => {
          await forgotPassword(values)
          setComplete(true)
        }}
      >
        {({ isSubmitting }) =>
          complete ? (
            <Box>
              If the address you provided exists, we'll send you an email!
            </Box>
          ) : (
            <Form>
              <InputField
                name="email"
                placeholder="email"
                label="Email"
                type="email"
              />

              <Button
                type="submit"
                colorScheme="primary"
                mt={10}
                isLoading={isSubmitting}
              >
                Reset Password
              </Button>
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  )
}

export default withUrqlClient(createUrqlClient)(ForgotPassword)
