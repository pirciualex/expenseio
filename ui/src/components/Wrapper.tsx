import { Box } from "@chakra-ui/react"
import React from "react"

interface WrapperProps {
  variant?: "small" | "regular"
}

const Wrapper: React.FC<WrapperProps> = ({ children, variant = "regular" }) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "1000px" : "500px"}
      w="100vw"
    >
      {children}
    </Box>
  )
}

export default Wrapper
