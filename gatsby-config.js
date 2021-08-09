require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
    
   })
   
   module.exports = {
       siteMetadata: {
           title: 'Nutrition Integrated',
           author: 'Nutrition Integrated'
       },
       plugins: [
           `gatsby-plugin-sharp`, 
           `gatsby-transformer-sharp`,
           `gatsby-plugin-sass`,
           'gatsby-plugin-react-helmet',
           `gatsby-plugin-sharp`,
           `gatsby-transformer-sharp`,
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
          
              
        //   {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //       name: 'Nutrition Integrated',
        //       short_name: 'Nutrition Integrated',
        //       start_url: '/',
        //       background_color: '#f7f0eb',
        //       theme_color: '#a2466c',
        //       display: 'standalone',
        //       icon: 'src/images/favicon.ico',
        //     },
        // }
      ]
      
  }