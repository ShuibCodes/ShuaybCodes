import React from "react"
import "./ImgSection.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"




const ImgSection = () => {
  const data = useStaticQuery(graphql`
  query  {
    allFile
    (filter: 
        {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {nin: ["background", "background2","gatsby-icon"]}}
        
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
                       ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  
  
`)
     // map through images and return 
   return(
       <>
       
       <div>
           <h2 className="ImgTitle" >Join Our Growing Community!</h2>
       </div>
             <div className="image-container">
          
          <div className="image-grid">
              {data.allFile.edges.map((image,key)=> (
                  // adding properties
                  <Img key={key}
                  className="image-item"
                  fluid={image.node.childImageSharp.fluid}
                  alt={image.node.base.split(".")[0]}
                
                        

                  />
              ))}
          </div>
          
      </div>
       </>
    
       
       
   )

}

export default ImgSection
