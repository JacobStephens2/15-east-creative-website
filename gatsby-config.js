/* eslint-disable quotes */
const guid = process.env.GATSBY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: "15 East",
    description: "15 East Creative Graphic and Web Design Studio Website",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
        name: "content",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GATSBY_GOOGLE_ANALYTICS_ID", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: guid || "UA-XXX-1",
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Playfair+Display:400,700"],
        display: "swap",
      },
    },
  ],
};
