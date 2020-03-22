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
import { Footer } from "./Footer"

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

svg {
  fill: currentColor;
}

a {
  color: ${theme.colors.primary};
}
`

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div
      css={{
        minHeight: "100vh",
        backgroundColor: theme.colors.grey.dark,
        color: theme.colors.text,
        display: "grid",
        gridTemplateRows: "100px 1fr 64px",
      }}
    >
      <Global styles={globalStyles} />
      <Header />
      <Wrapper css={{ paddingBottom: "4rem" }}>{children}</Wrapper>
      <Footer css={{ alignSelf: "center" }} />
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node,
}
