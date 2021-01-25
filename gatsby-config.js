const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gatsby react monorepository`,
    description: `Gatsby configuration.`,
    author: `Artem`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // if in folder has no image remove gatsby-source-filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
