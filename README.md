# gatsby-theme-hbs-mdx

A theme that provides a basic mdx setup. All you have to do is bring your mdx files in a blog folder at the root of your project.

```yarn add gatsby-theme-hbs-mdx```

In your sites gatsby-config: 

```
module.exports = {
    __experimentalThemes: ['gatsby-theme-hbs-mdx']
}

```

---

* The first time you run ```gatsby develop``` a blog folder will be created at your projects root. Alternatively create a blog folder at the root of your project before you run the command. This is where you should place your mdx files.
* In your src folder create a new folder named after the theme - ```gatsby-theme-hbs-mdx``` then add a pages folder and shadow the themes blogIndex.js file to customize your blogs index. By default it has the following format:

```
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

export default BlogIndex
```

Keep the parameters the same ```({data})```, all you have to do is change whats returned. You will have access to the same data as described above.

* To customize your posts layout shadow the posts-layout.js file by creating a components folder inside of ```gatsby-theme-hbs-mdx``` and then a posts-layout.js file. Its base format (with imports) is like so:

```
import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

function PageTemplate({ data: { mdx } }) {
  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </div>
  );
}

export default PageTemplate
```

Like in the blogIndex, you will have access to the posts metadata and body content. Make sure you import the ```MDXRenderer``` from ```gatsby-mdx/mdx-renderer``` and render the posts body content within, the same as the original file.

---

The goal of this theme is to take away any complexity of working with graphql queries or plugins. Whats left is a single folder called blog at the root of your project which holds your mdx files. It's encouraged to shadow the blogIndex and posts-layout components in order to add you own styling (I have left the styles blank to encourage you to do this as thats not what this theme is about). 

Happy Blogging!