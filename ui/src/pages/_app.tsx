import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import theme from "../theme"

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Navbar />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
