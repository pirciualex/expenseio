import { RegisterUserInput } from "src/dtos/RegisterUserInput"
import { validateEmail } from "./validateEmail"
import { validateUsername } from "./validateUsername"

export const validateRegister = (input: RegisterUserInput) => {
  if (!validateEmail(input.email)) {
    return [
      {
        field: "email",
        message: "Please provide a valid email!",
      },
    ]
  }

  if (input.username.length <= 3) {
    return [
      {
        field: "username",
        message: "Length must be greater than 3!",
      },
    ]
  }

  if (!validateUsername(input.username)) {
    return [
      {
        field: "username",
        message: "Username can only contain letters, numbers and -!",
      },
    ]
  }

  if (input.password.length <= 3) {
    return [
      {
        field: "password",
        message: "Length must be greater than 3!",
      },
    ]
  }

  return null
}
