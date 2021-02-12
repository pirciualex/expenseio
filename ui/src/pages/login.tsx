import {
  Button,
  Flex,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react"
import { Form, Formik } from "formik"
import NextLink from "next/link"
import { withUrqlClient } from "next-urql"
import { useRouter } from "next/router"
import React from "react"

import InputField from "../components/InputField"
import Wrapper from "../components/Wrapper"
import { useLoginMutation } from "../generated/graphql"
import { createUrqlClient } from "../helpers/createUrqlClient"
import { toErrorMap } from "../helpers/toErrorMap"

const Login: React.FC<{}> = () => {
  const router = useRouter()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [, login] = useLoginMutation()

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({ input: values })

          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors))
          } else if (response.data?.login.user) {
            router.push("/")
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="usernameOrEmail"
              placeholder="username or email"
              label="Username or Email"
            />

            <InputGroup mt={10}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
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

            <Flex justify="end" mt={4}>
              <NextLink href="/forgot-password">
                <Link>forgot password?</Link>
              </NextLink>
            </Flex>

            <Button
              type="submit"
              colorScheme="primary"
              mt={10}
              isLoading={isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default withUrqlClient(createUrqlClient)(Login)
