import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PostTemplate = ({ data }) => {
  const post = data.mdx

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
      <MDXProvider>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }),
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
      }
    }
  }
`

export default PostTemplate
