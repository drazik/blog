import React from "react"
import PropTypes from "prop-types"

export const Wrapper = ({ component: Component = "div", ...props }) => {
  return (
    <Component
      {...props}
      css={{ width: "90%", maxWidth: 850, margin: "0 auto" }}
    />
  )
}

Wrapper.propTypes = {
  component: PropTypes.elementType,
}
