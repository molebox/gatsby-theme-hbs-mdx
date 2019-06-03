const pkg = require('./package.json');

module.exports = {
    __experimentalThemes: ['gatsby-theme-hbs-mdx-core'],
    plugins: [
          {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/pages`
            }
          },
          {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'blog',
              path: 'blog'
            }
          },
          {
            resolve: 'gatsby-plugin-compile-es6-packages',
            options: {
              modules: [pkg.name]
            }
          }
    ]
}