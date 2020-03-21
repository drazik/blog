import React from "react"
import { Wrapper } from "./Wrapper"
import { Link } from "./Link"
import { ReactComponent as RSSIcon } from "../assets/img/icons/rss.svg"

export const Footer = props => {
  return (
    <footer {...props}>
      <Wrapper>
        <Link to="/">
          <RSSIcon width="24" height="24" />
          Flux RSS
        </Link>
      </Wrapper>
    </footer>
  )
}
