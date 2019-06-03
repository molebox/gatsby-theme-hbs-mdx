import React from 'react'
import { Link, graphql } from 'gatsby'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <div>
      <h1>Blog</h1>
      <h3>Shadow this component to create your own blog index page</h3>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
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
export default BlogIndex