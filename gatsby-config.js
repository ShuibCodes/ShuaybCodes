require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
    
   })


   module.exports = {
       siteMetadata: {
           title: 'Wing Chun Academy',
           author: 'Shuib Abdillahi'
       },
       plugins: [
            




           `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
  
            
           'gatsby-plugin-react-helmet',`gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
  
             {
               resolve: 'gatsby-source-contentful',
             
              options: {
                  spaceId: process.env.CONTENTFUL_SPACE_ID,
                  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
              },
             
             
          },

          {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: process.env.GA_TRACKING_ID
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