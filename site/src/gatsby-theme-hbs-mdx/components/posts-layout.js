import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx"

function PageTemplate({ data: { mdx } }) {
  return (
    <div>
        <h1>This is a shadowed component</h1>
        <h2>{mdx.frontmatter.title}</h2>
        <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  );
}

export default PageTemplate;