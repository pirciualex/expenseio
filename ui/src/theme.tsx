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
      50: "#75FFA8",
      100: "#47FF8B",
      200: "#1AFF6E",
      300: "#00EB56",
      400: "#00BD45",
      500: "#008D33",
      600: "#007D2E",
      700: "#006B27",
      800: "#005921",
      900: "#00471A",
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
