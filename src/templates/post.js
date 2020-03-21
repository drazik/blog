import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }),
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export default PostTemplate
