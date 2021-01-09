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
    primary: "#008D33",
  },
  fonts,
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          data-v-423bf9ae=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 396 90"
          className="iconLeft"
        >
          <g
            data-v-423bf9ae=""
            id="ce5e70a9-eb17-4dae-a5f9-251c08103656"
            fill="#008d33"
            transform="matrix(4.494381904602051,0,0,4.494381904602051,108.15731811523438,-1.1797723770141602)"
          >
            <path d="M8.25 14.11L0.41 14.11L0.41 13.59L0.41 13.59Q0.83 13.57 1.06 13.52L1.06 13.52L1.06 13.52Q1.29 13.48 1.48 13.34L1.48 13.34L1.48 13.34Q1.67 13.20 1.67 12.95L1.67 12.95L1.67 12.95Q1.72 11.16 1.72 8.33L1.72 8.33L1.72 8.33Q1.72 6.22 1.67 4.86L1.67 4.86L1.67 4.86Q1.65 4.55 1.45 4.45L1.45 4.45L1.45 4.45Q1.25 4.34 0.71 4.31L0.71 4.31L0.52 4.30L0.52 3.78L0.52 3.78Q1.27 3.84 2.45 3.84L2.45 3.84L2.45 3.84Q3.57 3.84 4.20 3.79L4.20 3.79L7.88 3.78L8.05 3.93L8.05 3.93Q8.02 4.05 7.85 5.21L7.85 5.21L7.85 5.21Q7.69 6.37 7.67 6.52L7.67 6.52L7.20 6.52L7.20 6.52Q6.93 5.10 6.89 5.01L6.89 5.01L6.89 5.01Q6.80 4.75 6.66 4.65L6.66 4.65L6.66 4.65Q6.51 4.61 6.15 4.56L6.15 4.56L6.15 4.56Q5.81 4.52 4.38 4.52L4.38 4.52L4.38 4.52Q3.75 4.52 3.50 4.61L3.50 4.61L3.50 4.61Q3.25 4.70 3.23 5.00L3.23 5.00L3.23 5.00Q3.21 5.75 3.18 8.33L3.18 8.33L3.18 8.33Q5.15 8.33 6.62 8.26L6.62 8.26L6.48 9.30L6.24 9.30L6.24 9.30Q5.99 9.11 5.34 9.04L5.34 9.04L5.34 9.04Q4.69 8.96 3.95 8.95L3.95 8.95L3.95 8.95Q3.21 8.93 3.16 8.93L3.16 8.93L3.16 8.93Q3.14 11.00 3.14 12.95L3.14 12.95L3.14 12.95Q3.14 13.29 3.64 13.39L3.64 13.39L3.64 13.39Q4.14 13.50 5.47 13.50L5.47 13.50L5.47 13.50Q6.73 13.50 6.94 13.33L6.94 13.33L6.94 13.33Q7.29 13.02 7.66 11.62L7.66 11.62L7.85 10.86L8.37 10.86L8.37 10.86Q8.33 11.23 8.29 12.56L8.29 12.56L8.29 12.56Q8.25 13.89 8.25 14.11L8.25 14.11ZM11.19 14.11L8.89 14.11L8.89 13.64L8.89 13.64Q9.20 13.61 9.30 13.55L9.30 13.55L9.30 13.55Q9.55 13.41 9.98 12.82L9.98 12.82L9.98 12.82Q10.42 12.22 11.62 10.39L11.62 10.39L11.62 10.39Q11.30 9.87 10.96 9.32L10.96 9.32L10.96 9.32Q10.63 8.76 10.49 8.54L10.49 8.54L10.49 8.54Q10.35 8.32 10.18 8.07L10.18 8.07L10.18 8.07Q10.01 7.83 9.89 7.76L9.89 7.76L9.89 7.76Q9.77 7.69 9.63 7.63L9.63 7.63L9.63 7.63Q9.48 7.57 9.23 7.55L9.23 7.55L9.20 7.08L9.20 7.08Q9.69 7.03 10.16 6.89L10.16 6.89L10.16 6.89Q10.64 6.75 10.75 6.75L10.75 6.75L10.75 6.75Q10.82 6.75 10.89 6.76L10.89 6.76L10.89 6.76Q10.95 6.78 11.01 6.83L11.01 6.83L11.01 6.83Q11.07 6.89 11.13 6.95L11.13 6.95L11.13 6.95Q11.19 7.01 11.27 7.14L11.27 7.14L11.27 7.14Q11.35 7.27 11.42 7.39L11.42 7.39L11.42 7.39Q11.49 7.52 11.61 7.74L11.61 7.74L11.61 7.74Q11.73 7.95 11.84 8.16L11.84 8.16L11.84 8.16Q11.96 8.37 12.14 8.70L12.14 8.70L12.14 8.70Q12.32 9.03 12.49 9.34L12.49 9.34L12.49 9.34Q13.57 7.83 13.57 7.70L13.57 7.70L13.57 7.70Q13.57 7.53 13.48 7.46L13.48 7.46L13.48 7.46Q13.40 7.38 13.31 7.38L13.31 7.38L13.31 7.38Q13.22 7.38 13.13 7.33L13.13 7.33L13.13 7.33Q13.05 7.28 13.05 7.15L13.05 7.15L13.05 7.15Q13.05 7.11 13.07 7.07L13.07 7.07L13.07 7.07Q13.09 7.03 13.17 6.97L13.17 6.97L13.17 6.97Q13.24 6.92 13.37 6.92L13.37 6.92L13.37 6.92Q13.44 6.92 13.69 6.93L13.69 6.93L13.69 6.93Q13.94 6.94 14.17 6.94L14.17 6.94L14.17 6.94Q14.38 6.94 14.60 6.93L14.60 6.93L14.60 6.93Q14.83 6.92 14.98 6.92L14.98 6.92L14.98 6.92Q15.26 6.92 15.26 7.21L15.26 7.21L15.26 7.21Q15.26 7.31 15.19 7.36L15.19 7.36L15.19 7.36Q15.12 7.41 15.02 7.43L15.02 7.43L15.02 7.43Q14.92 7.45 14.76 7.56L14.76 7.56L14.76 7.56Q14.59 7.67 14.45 7.87L14.45 7.87L14.45 7.87Q13.86 8.58 12.94 9.98L12.94 9.98L12.94 9.98Q14.07 11.76 14.59 12.62L14.59 12.62L14.59 12.62Q15.11 13.48 15.20 13.70L15.20 13.70L15.20 13.70Q15.30 13.92 15.30 14.08L15.30 14.08L15.30 14.08Q15.30 14.36 15.06 14.36L15.06 14.36L15.06 14.36Q14.63 14.36 13.93 13.55L13.93 13.55L13.93 13.55Q13.23 12.74 12.08 10.98L12.08 10.98L12.08 10.98Q11.91 11.24 11.70 11.56L11.70 11.56L11.70 11.56Q11.49 11.87 11.38 12.05L11.38 12.05L11.38 12.05Q11.27 12.22 11.13 12.43L11.13 12.43L11.13 12.43Q10.99 12.64 10.92 12.77L10.92 12.77L10.92 12.77Q10.85 12.89 10.79 13.01L10.79 13.01L10.79 13.01Q10.72 13.13 10.70 13.22L10.70 13.22L10.70 13.22Q10.67 13.30 10.67 13.36L10.67 13.36L10.67 13.36Q10.67 13.55 11.19 13.64L11.19 13.64L11.19 14.11ZM15.75 7.55L15.72 7.08L15.72 7.08Q16.32 7.03 16.82 6.94L16.82 6.94L16.82 6.94Q17.32 6.86 17.55 6.80L17.55 6.80L17.55 6.80Q17.78 6.75 17.82 6.75L17.82 6.75L17.82 6.75Q18.07 6.75 18.07 6.97L18.07 6.97L18.07 6.97Q18.07 6.99 18.05 7.33L18.05 7.33L18.05 7.33Q18.03 7.67 18.03 7.76L18.03 7.76L18.03 7.76Q18.14 7.70 18.59 7.41L18.59 7.41L18.59 7.41Q19.03 7.11 19.46 6.93L19.46 6.93L19.46 6.93Q19.89 6.75 20.34 6.75L20.34 6.75L20.34 6.75Q20.48 6.75 20.69 6.78L20.69 6.78L20.69 6.78Q20.89 6.82 21.27 7.01L21.27 7.01L21.27 7.01Q21.64 7.20 21.94 7.50L21.94 7.50L21.94 7.50Q22.23 7.80 22.46 8.43L22.46 8.43L22.46 8.43Q22.69 9.06 22.69 9.88L22.69 9.88L22.69 9.88Q22.69 11.90 21.86 13.05L21.86 13.05L21.86 13.05Q21.03 14.20 19.73 14.20L19.73 14.20L19.73 14.20Q19.42 14.20 19.16 14.16L19.16 14.16L19.16 14.16Q18.90 14.13 18.73 14.06L18.73 14.06L18.73 14.06Q18.55 13.99 18.42 13.92L18.42 13.92L18.42 13.92Q18.30 13.85 18.21 13.74L18.21 13.74L18.21 13.74Q18.13 13.64 18.09 13.57L18.09 13.57L18.09 13.57Q18.05 13.51 18.00 13.42L18.00 13.42L18.00 13.42Q17.96 13.33 17.95 13.31L17.95 13.31L17.95 13.31Q17.93 13.75 17.91 14.52L17.91 14.52L17.91 14.52Q17.89 15.29 17.89 15.48L17.89 15.48L17.89 15.48Q17.91 16.06 18.05 16.22L18.05 16.22L18.05 16.22Q18.19 16.38 18.73 16.48L18.73 16.48L18.73 16.95L15.88 16.95L15.88 16.51L15.88 16.51Q16.32 16.45 16.51 16.31L16.51 16.31L16.51 16.31Q16.69 16.17 16.69 15.90L16.69 15.90L16.69 15.90Q16.67 14.59 16.67 8.30L16.67 8.30L16.67 8.30Q16.67 7.80 16.53 7.67L16.53 7.67L16.53 7.67Q16.38 7.55 15.75 7.55L15.75 7.55ZM17.95 10.95L17.95 10.95L17.95 10.95Q17.95 12.42 18.25 12.97L18.25 12.97L18.25 12.97Q18.55 13.52 19.46 13.52L19.46 13.52L19.46 13.52Q20.23 13.52 20.79 12.73L20.79 12.73L20.79 12.73Q21.35 11.94 21.35 10.30L21.35 10.30L21.35 10.30Q21.35 7.83 19.74 7.83L19.74 7.83L19.74 7.83Q19.03 7.83 18.02 8.34L18.02 8.34L18.02 8.34Q18.02 8.75 17.98 9.64L17.98 9.64L17.98 9.64Q17.95 10.53 17.95 10.95ZM23.48 10.67L23.48 10.67L23.48 10.67Q23.48 9.25 23.79 8.53L23.79 8.53L23.79 8.53Q24.01 8.01 24.86 7.40L24.86 7.40L24.86 7.40Q25.72 6.79 26.46 6.79L26.46 6.79L26.46 6.79Q27.10 6.79 27.59 6.94L27.59 6.94L27.59 6.94Q28.08 7.10 28.36 7.40L28.36 7.40L28.36 7.40Q28.64 7.70 28.82 7.99L28.82 7.99L28.82 7.99Q28.99 8.27 29.06 8.70L29.06 8.70L29.06 8.70Q29.12 9.13 29.14 9.38L29.14 9.38L29.14 9.38Q29.16 9.63 29.16 10.00L29.16 10.00L29.16 10.00Q29.16 10.12 29.16 10.18L29.16 10.18L29.16 10.18Q28.71 10.46 27.69 10.46L27.69 10.46L24.82 10.46L24.82 10.46Q24.82 10.91 24.84 11.15L24.84 11.15L24.84 11.15Q24.85 11.40 24.89 11.78L24.89 11.78L24.89 11.78Q24.93 12.17 25.05 12.38L25.05 12.38L25.05 12.38Q25.17 12.60 25.37 12.82L25.37 12.82L25.37 12.82Q25.56 13.05 25.89 13.15L25.89 13.15L25.89 13.15Q26.21 13.24 26.64 13.24L26.64 13.24L26.64 13.24Q27.86 13.24 28.87 12.25L28.87 12.25L29.18 12.57L29.18 12.57Q29.12 12.63 28.91 12.85L28.91 12.85L28.91 12.85Q28.70 13.06 28.63 13.13L28.63 13.13L28.63 13.13Q28.56 13.20 28.36 13.39L28.36 13.39L28.36 13.39Q28.17 13.58 28.06 13.65L28.06 13.65L28.06 13.65Q27.96 13.72 27.77 13.86L27.77 13.86L27.77 13.86Q27.58 14 27.45 14.06L27.45 14.06L27.45 14.06Q27.31 14.11 27.13 14.19L27.13 14.19L27.13 14.19Q26.94 14.27 26.75 14.29L26.75 14.29L26.75 14.29Q26.56 14.32 26.36 14.32L26.36 14.32L26.36 14.32Q25.52 14.32 24.93 13.99L24.93 13.99L24.93 13.99Q24.33 13.66 24.03 13.10L24.03 13.10L24.03 13.10Q23.73 12.54 23.60 11.95L23.60 11.95L23.60 11.95Q23.48 11.35 23.48 10.67ZM24.85 9.83L24.85 9.83L25.65 9.83L25.65 9.83Q27.51 9.83 27.86 9.58L27.86 9.58L27.86 9.58Q27.86 9.28 27.80 9.00L27.80 9.00L27.80 9.00Q27.75 8.72 27.61 8.41L27.61 8.41L27.61 8.41Q27.47 8.09 27.16 7.90L27.16 7.90L27.16 7.90Q26.85 7.70 26.40 7.70L26.40 7.70L26.40 7.70Q25.45 7.70 25.15 8.17L25.15 8.17L25.15 8.17Q24.85 8.64 24.85 9.83ZM30.09 7.74L30.04 7.21L30.04 7.21Q30.62 7.15 31.20 6.94L31.20 6.94L31.20 6.94Q31.78 6.73 31.93 6.73L31.93 6.73L31.93 6.73Q32.13 6.73 32.20 6.89L32.20 6.89L32.20 6.89Q32.27 7.06 32.27 7.48L32.27 7.48L32.27 7.67L32.27 7.67Q33.88 6.76 34.90 6.76L34.90 6.76L34.90 6.76Q35.71 6.76 36.06 7.26L36.06 7.26L36.06 7.26Q36.41 7.76 36.41 8.40L36.41 8.40L36.41 13.08L36.41 13.08Q36.41 13.38 36.55 13.50L36.55 13.50L36.55 13.50Q36.68 13.61 37.16 13.64L37.16 13.64L37.16 14.11L34.30 14.11L34.30 13.64L34.30 13.64Q34.83 13.59 34.97 13.47L34.97 13.47L34.97 13.47Q35.10 13.34 35.10 13.02L35.10 13.02L35.10 8.58L35.10 8.58Q35.10 8.23 34.88 8.04L34.88 8.04L34.88 8.04Q34.66 7.85 34.43 7.82L34.43 7.82L34.43 7.82Q34.20 7.78 33.87 7.78L33.87 7.78L33.87 7.78Q33.60 7.78 33.10 7.95L33.10 7.95L33.10 7.95Q32.59 8.11 32.31 8.30L32.31 8.30L32.31 8.30Q32.30 9.13 32.27 10.03L32.27 10.03L32.27 10.03Q32.24 10.93 32.23 11.49L32.23 11.49L32.23 11.49Q32.21 12.04 32.21 12.38L32.21 12.38L32.21 12.38Q32.21 13.23 32.35 13.42L32.35 13.42L32.35 13.42Q32.49 13.61 33.04 13.64L33.04 13.64L33.04 14.11L30.10 14.11L30.10 13.64L30.10 13.64Q30.39 13.59 30.51 13.55L30.51 13.55L30.51 13.55Q30.63 13.51 30.75 13.44L30.75 13.44L30.75 13.44Q30.87 13.37 30.91 13.17L30.91 13.17L30.91 13.17Q30.94 12.96 30.95 12.73L30.95 12.73L30.95 12.73Q30.97 12.50 30.97 12.01L30.97 12.01L30.97 12.01Q30.97 11.83 30.93 10.04L30.93 10.04L30.93 10.04Q30.88 8.26 30.87 8.20L30.87 8.20L30.87 8.20Q30.86 8.13 30.84 8.07L30.84 8.07L30.84 8.07Q30.81 8.01 30.78 7.97L30.78 7.97L30.78 7.97Q30.74 7.92 30.72 7.90L30.72 7.90L30.72 7.90Q30.70 7.87 30.65 7.84L30.65 7.84L30.65 7.84Q30.59 7.81 30.56 7.80L30.56 7.80L30.56 7.80Q30.53 7.80 30.46 7.78L30.46 7.78L30.46 7.78Q30.38 7.77 30.35 7.76L30.35 7.76L30.35 7.76Q30.32 7.76 30.23 7.75L30.23 7.75L30.23 7.75Q30.13 7.74 30.09 7.74L30.09 7.74ZM38.11 9.10L38.11 9.10L38.11 9.10Q38.11 8.43 38.35 8.06L38.35 8.06L38.35 8.06Q38.85 7.25 39.30 7.01L39.30 7.01L39.30 7.01Q39.75 6.76 40.63 6.76L40.63 6.76L40.63 6.76Q41.15 6.76 41.71 7L41.71 7L41.71 7Q41.86 7.06 41.94 7.10L41.94 7.10L41.94 7.10Q42.01 7.15 42.10 7.30L42.10 7.30L42.10 7.30Q42.18 7.45 42.18 7.69L42.18 7.69L42.18 7.69Q42.18 7.73 42.17 7.90L42.17 7.90L42.17 7.90Q42.15 8.08 42.15 8.39L42.15 8.39L42.15 8.39Q42.14 8.69 42.14 9.06L42.14 9.06L41.62 9.06L41.62 9.06Q41.61 8.88 41.50 8.53L41.50 8.53L41.50 8.53Q41.40 8.18 41.27 7.99L41.27 7.99L41.27 7.99Q40.99 7.59 40.22 7.59L40.22 7.59L40.22 7.59Q39.84 7.59 39.59 7.69L39.59 7.69L39.59 7.69Q39.34 7.80 39.23 7.96L39.23 7.96L39.23 7.96Q39.13 8.12 39.09 8.25L39.09 8.25L39.09 8.25Q39.05 8.39 39.05 8.51L39.05 8.51L39.05 8.51Q39.05 8.96 39.40 9.23L39.40 9.23L39.40 9.23Q39.75 9.51 40.25 9.67L40.25 9.67L40.25 9.67Q40.75 9.84 41.27 10.04L41.27 10.04L41.27 10.04Q41.78 10.25 42.13 10.72L42.13 10.72L42.13 10.72Q42.48 11.19 42.48 11.90L42.48 11.90L42.48 11.90Q42.48 12.64 42.27 12.99L42.27 12.99L42.27 12.99Q41.89 13.59 41.37 14L41.37 14L41.37 14Q41.16 14.15 40.71 14.25L40.71 14.25L40.71 14.25Q40.26 14.35 40.04 14.35L40.04 14.35L40.04 14.35Q38.54 14.35 38.25 13.85L38.25 13.85L38.25 13.85Q38.14 13.66 38.14 13.37L38.14 13.37L38.14 13.37Q38.14 12.24 38.20 11.98L38.20 11.98L38.20 11.98Q38.26 11.72 38.51 11.72L38.51 11.72L38.51 11.72Q38.72 11.72 38.78 11.91L38.78 11.91L38.78 11.91Q38.84 12.11 38.89 12.45L38.89 12.45L38.89 12.45Q38.93 12.80 39.09 13.01L39.09 13.01L39.09 13.01Q39.41 13.45 40.25 13.45L40.25 13.45L40.25 13.45Q40.87 13.45 41.22 13.17L41.22 13.17L41.22 13.17Q41.57 12.89 41.57 12.40L41.57 12.40L41.57 12.40Q41.57 11.93 41.21 11.65L41.21 11.65L41.21 11.65Q40.85 11.37 40.34 11.21L40.34 11.21L40.34 11.21Q39.83 11.05 39.33 10.86L39.33 10.86L39.33 10.86Q38.82 10.67 38.47 10.23L38.47 10.23L38.47 10.23Q38.11 9.80 38.11 9.10ZM43.32 10.67L43.32 10.67L43.32 10.67Q43.32 9.25 43.62 8.53L43.62 8.53L43.62 8.53Q43.85 8.01 44.70 7.40L44.70 7.40L44.70 7.40Q45.56 6.79 46.30 6.79L46.30 6.79L46.30 6.79Q46.94 6.79 47.43 6.94L47.43 6.94L47.43 6.94Q47.92 7.10 48.20 7.40L48.20 7.40L48.20 7.40Q48.48 7.70 48.66 7.99L48.66 7.99L48.66 7.99Q48.83 8.27 48.90 8.70L48.90 8.70L48.90 8.70Q48.96 9.13 48.98 9.38L48.98 9.38L48.98 9.38Q49 9.63 49 10.00L49 10.00L49 10.00Q49 10.12 49 10.18L49 10.18L49 10.18Q48.55 10.46 47.53 10.46L47.53 10.46L44.66 10.46L44.66 10.46Q44.66 10.91 44.67 11.15L44.67 11.15L44.67 11.15Q44.69 11.40 44.73 11.78L44.73 11.78L44.73 11.78Q44.77 12.17 44.89 12.38L44.89 12.38L44.89 12.38Q45.01 12.60 45.21 12.82L45.21 12.82L45.21 12.82Q45.40 13.05 45.72 13.15L45.72 13.15L45.72 13.15Q46.05 13.24 46.48 13.24L46.48 13.24L46.48 13.24Q47.70 13.24 48.71 12.25L48.71 12.25L49.01 12.57L49.01 12.57Q48.96 12.63 48.75 12.85L48.75 12.85L48.75 12.85Q48.54 13.06 48.47 13.13L48.47 13.13L48.47 13.13Q48.40 13.20 48.20 13.39L48.20 13.39L48.20 13.39Q48.01 13.58 47.90 13.65L47.90 13.65L47.90 13.65Q47.80 13.72 47.61 13.86L47.61 13.86L47.61 13.86Q47.42 14 47.29 14.06L47.29 14.06L47.29 14.06Q47.15 14.11 46.96 14.19L46.96 14.19L46.96 14.19Q46.77 14.27 46.59 14.29L46.59 14.29L46.59 14.29Q46.40 14.32 46.20 14.32L46.20 14.32L46.20 14.32Q45.36 14.32 44.77 13.99L44.77 13.99L44.77 13.99Q44.17 13.66 43.87 13.10L43.87 13.10L43.87 13.10Q43.57 12.54 43.44 11.95L43.44 11.95L43.44 11.95Q43.32 11.35 43.32 10.67ZM44.69 9.83L44.69 9.83L45.49 9.83L45.49 9.83Q47.35 9.83 47.70 9.58L47.70 9.58L47.70 9.58Q47.70 9.28 47.64 9.00L47.64 9.00L47.64 9.00Q47.59 8.72 47.45 8.41L47.45 8.41L47.45 8.41Q47.31 8.09 47.00 7.90L47.00 7.90L47.00 7.90Q46.69 7.70 46.24 7.70L46.24 7.70L46.24 7.70Q45.29 7.70 44.99 8.17L44.99 8.17L44.99 8.17Q44.69 8.64 44.69 9.83ZM53.72 14.11L49.84 14.11L49.84 13.59L49.84 13.59Q50.26 13.57 50.49 13.52L50.49 13.52L50.49 13.52Q50.72 13.48 50.91 13.34L50.91 13.34L50.91 13.34Q51.10 13.20 51.10 12.95L51.10 12.95L51.10 12.95Q51.10 8.11 51.00 4.86L51.00 4.86L51.00 4.86Q50.99 4.55 50.78 4.45L50.78 4.45L50.78 4.45Q50.58 4.34 50.04 4.31L50.04 4.31L49.84 4.30L49.84 3.78L53.72 3.78L53.72 4.30L53.52 4.31L53.52 4.31Q52.98 4.34 52.77 4.45L52.77 4.45L52.77 4.45Q52.57 4.55 52.56 4.86L52.56 4.86L52.56 4.86Q52.46 7.66 52.46 12.95L52.46 12.95L52.46 12.95Q52.46 13.20 52.64 13.34L52.64 13.34L52.64 13.34Q52.82 13.47 53.05 13.52L53.05 13.52L53.05 13.52Q53.28 13.57 53.72 13.59L53.72 13.59L53.72 14.11ZM54.71 9.10L54.71 9.10L54.71 9.10Q54.71 6.93 55.61 5.57L55.61 5.57L55.61 5.57Q56.08 4.86 56.94 4.38L56.94 4.38L56.94 4.38Q57.81 3.89 58.48 3.74L58.48 3.74L58.48 3.74Q59.15 3.60 59.65 3.60L59.65 3.60L59.65 3.60Q61.84 3.60 62.91 4.84L62.91 4.84L62.91 4.84Q63.98 6.09 63.98 8.36L63.98 8.36L63.98 8.36Q63.98 10.95 62.99 12.40L62.99 12.40L62.99 12.40Q62.31 13.38 61.16 13.85L61.16 13.85L61.16 13.85Q60.00 14.31 59.15 14.31L59.15 14.31L59.15 14.31Q56.92 14.31 55.82 12.87L55.82 12.87L55.82 12.87Q54.71 11.44 54.71 9.10ZM56.14 8.81L56.14 8.81L56.14 8.81Q56.14 9.09 56.15 9.34L56.15 9.34L56.15 9.34Q56.17 9.60 56.27 10.21L56.27 10.21L56.27 10.21Q56.38 10.81 56.57 11.28L56.57 11.28L56.57 11.28Q56.76 11.75 57.15 12.26L57.15 12.26L57.15 12.26Q57.55 12.78 58.11 13.06L58.11 13.06L58.11 13.06Q58.76 13.38 59.79 13.38L59.79 13.38L59.79 13.38Q62.54 13.38 62.54 9.20L62.54 9.20L62.54 9.20Q62.54 6.83 61.80 5.75L61.80 5.75L61.80 5.75Q61.05 4.66 59.91 4.49L59.91 4.49L59.91 4.49Q59.78 4.47 59.15 4.47L59.15 4.47L59.15 4.47Q57.76 4.47 56.95 5.49L56.95 5.49L56.95 5.49Q56.14 6.51 56.14 8.81Z"></path>
          </g>
          <g
            data-v-423bf9ae=""
            id="31e2e9a0-8082-4b0d-b29f-ff8af23c8057"
            transform="matrix(2.8125,0,0,2.8125,0,0)"
            stroke="none"
            fill="#008d33"
          >
            <path d="M32 0H0v32h32V0zm-2.812 19.938H23.53C22.109 22.648 19.272 24.5 16 24.5s-6.109-1.852-7.529-4.562H2.812v-7.875H8.47C9.891 9.352 12.728 7.5 16 7.5s6.109 1.852 7.529 4.562h5.658v7.876z"></path>
          </g>
        </svg>
      ),
      viewBox: "0 0 3000 3163",
    },
  },
})

export default theme
