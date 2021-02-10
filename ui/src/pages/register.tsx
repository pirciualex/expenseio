import { Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { withUrqlClient } from "next-urql"
import { useRouter } from "next/router"
import React from "react"

import InputField from "../components/InputField"
import Wrapper from "../components/Wrapper"
import { useRegisterMutation } from "../generated/graphql"
import { createUrqlClient } from "../helpers/createUrqlClient"
import { toErrorMap } from "../helpers/toErrorMap"

interface registerProps {}

const Register: React.FC<registerProps> = () => {
  const router = useRouter()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [, register] = useRegisterMutation()

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register(values)

          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors))
          } else if (response.data?.register.user) {
            router.push("/")
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
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
            <Button
              type="submit"
              colorScheme="green"
              mt={10}
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default withUrqlClient(createUrqlClient)(Register)
