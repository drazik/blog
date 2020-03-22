import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { useTheme } from "emotion-theming"

export const Link = props => {
  const theme = useTheme()

  return (
    <GatsbyLink
      {...props}
      css={{
        textDecoration: "underline",
        color: theme.colors.primary,
        display: "inline-flex",
        alignItems: "center",
      }}
    />
  )
}
