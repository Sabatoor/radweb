/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Rad Web Design",
    titleTemplate: "%s | Helping startups get started",
    description: "Simple, one-page websites for new businesses that uses GatsbyJS",
    author: "Paul Zimeras",
    image: "/yellow-metal-design-decoration.jpg",
    siteUrl: "https://radweb.ca",
    twitterUsername: "@zimeras",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
  pathPrefix: "/radweb",
}
