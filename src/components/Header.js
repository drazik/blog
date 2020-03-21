import React from "react"
import { Wrapper } from "./Wrapper"
import { useTheme } from "emotion-theming"

export const Header = () => {
  const theme = useTheme()

  return (
    <header
      css={{
        position: "sticky",
        top: 0,
        fontWeight: 500,
        background: `linear-gradient(180deg, ${theme.colors.grey.dark} 0%, ${theme.colors.grey.dark}00 100%)`,
      }}
    >
      <Wrapper
        css={{
          paddingTop: 24,
          height: 100,
        }}
      >
        <span css={{ fontSize: 24 }}>drzk.</span>
        <span css={{ color: theme.colors.primary }}>writes</span>
      </Wrapper>
    </header>
  )
}
