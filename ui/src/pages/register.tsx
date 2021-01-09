import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react"
import { Form, Formik } from "formik"
import React from "react"
import InputField from "../components/InputField"
import Wrapper from "../components/Wrapper"

interface registerProps {}

const Register: React.FC<registerProps> = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={values => {
          console.log(values)
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

export default Register
