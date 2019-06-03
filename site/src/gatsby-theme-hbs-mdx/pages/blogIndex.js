import React from 'react'
import { Link } from 'gatsby'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <div style={{
       margin: '100px'
    }}>
      <h1 style={{color: 'hotpink'}}>My New Blog</h1>
      <h3>This component is shadowed from the theme</h3>
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

export default BlogIndex