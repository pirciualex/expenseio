export const validateUsername = (username: string) => {
  const re = /^[a-zA-Z0-9\-]+$/
  return re.test(String(username).toLowerCase())
}
