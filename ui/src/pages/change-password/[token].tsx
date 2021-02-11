import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react"
import { Formik, Form } from "formik"
import { NextPage } from "next"
import NextLink from "next/link"
import { withUrqlClient } from "next-urql"
import { useRouter } from "next/router"
import React, { useState } from "react"
import InputField from "../../components/InputField"
import Wrapper from "../../components/Wrapper"
import { useChangePasswordMutation } from "../../generated/graphql"
import { createUrqlClient } from "../../helpers/createUrqlClient"
import { toErrorMap } from "../../helpers/toErrorMap"

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const [show, setShow] = useState(false)
  const [tokenError, setTokenError] = useState("")
  const handleClick = () => setShow(!show)
  const [, changePassword] = useChangePasswordMutation()
  const router = useRouter()

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ newPassword: "", confirmNewPassword: "" }}
        onSubmit={async (values, { setErrors }) => {
          const input = {
            newPassword: values.newPassword,
            confirmNewPassword: values.confirmNewPassword,
            token,
          }
          const response = await changePassword({
            input,
          })
          if (response.data?.changePassword.errors) {
            const errorMap = toErrorMap(response.data.changePassword.errors)

            if ("token" in errorMap) {
              setTokenError(errorMap.token)
            }

            setErrors(errorMap)
          } else if (response.data?.changePassword.user) {
            router.push("/login")
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputGroup>
              <InputField
                name="newPassword"
                placeholder="New Password"
                label="New Password"
                type={show ? "text" : "password"}
              />
              <InputRightElement
                position="absolute"
                top="none"
                bottom="0"
                width="5rem"
              >
                <Button h="1.75rem" my="auto" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Box mt={10}>
              <InputField
                name="confirmNewPassword"
                placeholder="Confirm New Password"
                label="Confirm New Password"
                type="password"
              />
            </Box>

            {tokenError ? (
              <Alert status="error" mt={10}>
                <AlertIcon />
                <AlertTitle>{tokenError}</AlertTitle>
                <AlertDescription>
                  You can try accessing the{" "}
                  <NextLink href="/forgot-password">
                    <Link color="red.500">forgot password</Link>
                  </NextLink>{" "}
                  link again
                </AlertDescription>
              </Alert>
            ) : null}

            <Button
              type="submit"
              colorScheme="primary"
              mt={10}
              isLoading={isSubmitting}
            >
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  }
}

export default withUrqlClient(createUrqlClient)(ChangePassword)
