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
                  spaceId: '8olws3vbib1c',
                  accessToken: 'PH4N-wyv3OH119yARfYxx94GdGzKToEnooiMoQ0WqcY',
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