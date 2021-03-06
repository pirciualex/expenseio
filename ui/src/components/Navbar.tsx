import { Box, Button, Flex, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import React from "react"

import { useLogoutMutation, useMeQuery } from "../generated/graphql"
import { isServer } from "../helpers/isServer"
import { LogoIcon } from "../icons"

const Navbar = () => {
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  })
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation()
  let body

  if (fetching) {
    body = null
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={8}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </>
    )
  } else if (data.me) {
    body = (
      <Flex alignItems="center">
        <Box as="span" mr={8}>
          {data.me.username}
        </Box>
        <Button
          onClick={() => {
            logout()
          }}
          isLoading={logoutFetching}
          variant="link"
        >
          logout
        </Button>
      </Flex>
    )
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      bg="dark.500"
      color="gray.100"
      p={4}
    >
      <NextLink href="/">
        <LogoIcon fontSize={50} w="20rem" cursor="pointer" />
      </NextLink>
      <Box>
        <NextLink href="/">
          <Link>Home</Link>
        </NextLink>
      </Box>
      <Box>{body}</Box>
    </Flex>
  )
}

export default Navbar
