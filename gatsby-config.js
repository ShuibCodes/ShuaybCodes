require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "ShuaybCodes",
    author: "Shuib Abdillahi",
  },
  plugins: [
    `gatsby-plugin-postcss`,

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: "gatsby-source-contentful",

      options: {
        spaceId: "ns6ic3hnqqep",
        accessToken: "dDIeVUdKolVdP8jlmXjiNdZwwFCcYSXrxy3OMo-NXN8",
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-198338892-1",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
