import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})

const theme = extendTheme({
  colors: {
    black: "#16161D",
    primary: {
      50: "#1AFF6E",
      100: "#00EB56",
      200: "#00BD45",
      300: "#008D33",
      400: "#007D2E",
      500: "#006B27",
      600: "#005921",
      700: "#00471A",
      800: "003614",
      900: "00240D",
    },
    dark: {
      50: "#8DBBC9",
      100: "#66A4B7",
      200: "#49899C",
      300: "#376776",
      400: "#264650",
      500: "#132328",
      600: "#112024",
      700: "#0F1B1F",
      800: "#0C171A",
      900: "#0A1215",
    },
  },
  fonts,
  breakpoints,
})

export default theme
