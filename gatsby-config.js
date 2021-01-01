require("dotenv").config({

  path: `.env.${process.env.NODE_ENV}`,
  
})
export const siteMetadata = {
    title: 'Wing Chun Academy',
    author: 'Shuib Abdillahi'
}
export const plugins = [
    'gatsby-plugin-react-helmet', `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,

    {
        resolve: 'gatsby-source-contentful',
        options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        }
    },
    'gatsby-plugin-sass',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`,
            name: `images`,
            path: `${__dirname}/src/images`,
        }
    },
]
