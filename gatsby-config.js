require("dotenv").config({

  path: `.env.${process.env.NODE_ENV}`,
  
})
module.exports = {
    siteMetadata: {
        title: 'Recipes4You',
        author: 'Shuib Abdillahi'
    },
    plugins: [
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
        {
            resolve: `gatsby-plugin-sharp`,
           
          },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}