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
       `gatsby-plugin-styled-components`,
           {
               resolve: 'gatsby-source-contentful',
              options: {
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                  spaceId: process.env.CONTENTFUL_SPACE_ID,
                
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