import React from "react"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges.map(edge => edge.node)

  return posts.map(post => (
    <Link key={post.id} to={post.fields.slug}>
      <h1>{post.frontmatter.title}</h1>
      <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
    </Link>
  ))
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
