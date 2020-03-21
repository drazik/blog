import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { theme } from "../theme"
import manropeRegular from "../assets/fonts/Manrope-Regular.woff2"
import manropeBold from "../assets/fonts/Manrope-Bold.woff2"
import manropeSemiBold from "../assets/fonts/Manrope-SemiBold.woff2"
import { Header } from "./Header"
import { Wrapper } from "./Wrapper"

const globalStyles = css`
@font-face {
  font-family: Manrope;
  font-display: swap;
  src: url("${manropeRegular}") format("woff2");
}

@font-face {
  font-family: Manrope;
  font-weight: 500;
  font-display: swap;
  src: url("${manropeSemiBold}");
}

@font-face {
  font-family: Manrope;
  font-weight: bold;
  font-display: swap;
  src: url("${manropeBold}");
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Manrope, sans-serif;
  font-size: 18px;
}
`

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div
      css={{
        minHeight: "100vh",
        backgroundColor: theme.colors.grey.dark,
        color: theme.colors.text,
      }}
    >
      <Global styles={globalStyles} />
      <Header />
      <Wrapper>{children}</Wrapper>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node,
}
