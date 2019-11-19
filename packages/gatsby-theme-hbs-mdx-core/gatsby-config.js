module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
              defaultLayouts: {
                default: require.resolve('./src/components/posts-layout.js')
              },
            },
          },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/pages`
            }
        }
    ]
}