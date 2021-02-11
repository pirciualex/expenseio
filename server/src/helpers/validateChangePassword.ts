import { ChangePasswordInput } from "../dtos/ChangePasswordInput"

export const validateChangePassword = (input: ChangePasswordInput) => {
  if (input.newPassword.length <= 3) {
    return [
      {
        field: "newPassword",
        message: "Length must be greater than 3!",
      },
    ]
  }

  if (input.newPassword !== input.confirmNewPassword) {
    return [
      {
        field: "confirmNewPassword",
        message: "The inputs don't match!",
      },
    ]
  }

  return null
}
