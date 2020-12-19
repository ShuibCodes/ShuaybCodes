require("dotenv").config({

  path: `.env.${process.env.NODE_ENV}`,
  
})
module.exports = {
    siteMetadata: {
        title: 'Recipes4You',
        author: 'Recipes4You Ltd'
    },
    plugins: [
        `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,

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
                path:`${__dirname}/src/images`,
                
            }
        },
            
    ]
    
}