import React from "react"
import { graphql } from "gatsby"
import sortBy from "lodash/sortBy"

const IndexPage = ({ data }) => {
  const posts = sortBy(
    data.allMarkdownRemark.edges,
    edge => edge.node.frontmatter.date
  )
    .reverse()
    .map(edge => edge.node)

  return posts.map(post => (
    <article key={post.id}>
      <h1>{post.frontmatter.title}</h1>
      <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
    </article>
  ))
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

export default IndexPage
