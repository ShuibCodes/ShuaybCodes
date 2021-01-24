import React, { useState }  from "react"

import Map from '../pages/Map.js'
import  FooterLayout from '../components/Layouts/BlogLayout'
import pic from '../images/images.jpeg'
import '/src/components/styles/custom.css'

const Contact = () => {
    
   return(
     <FooterLayout>
         <div className="contact-container">
              <div className="contact-details">
                  <p> <span className="prompt" >Address: </span>200 Smiths Close , London, N22 5FL </p>
                    <p><span className="prompt" >Telephone: </span>0208115563 </p>
                    <p><span className="prompt" >FAX: </span>0300554977 </p>
                    <p><span className="prompt" >Email: </span>info@example.co.uk</p>
                    <p><span className="prompt" >PO BOX:
                    </span>P.O.Box 124, Lords Lane 211b </p>

              </div>
                  <img src={pic} ></img>
            </div>  
        
            <Map />
     </FooterLayout>
   )
           
}
  
  export default Contact;
