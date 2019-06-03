import React from "react";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

function PageTemplate({ data: { mdx } }) {
  return (
    <div>
        <h1>This is a shadowed component</h1>
        <h2>{mdx.frontmatter.title}</h2>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </div>
  );
}

export default PageTemplate;