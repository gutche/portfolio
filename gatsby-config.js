const path = require(`path`)
require("dotenv").config()

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_MEASUREMENT_ID],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          delayOnRouteUpdate: 0,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-copy-linked-files`],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `src`, `markdown`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.png",
      },
    },
  ],
  siteMetadata: {
    title: "Gledrian Gutierrez",
    description:
      "Home page of Gledrian Gutierrez! A software developer based in Madrid, Spain.",
    author: "Gledrian Gutierrez",
    siteUrl: "https://gledrian.dev",
  },
}
