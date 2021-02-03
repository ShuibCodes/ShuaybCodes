import React from "react"

import Map from '../pages/Map.js'
import  FooterLayout from '../components/Layouts/BlogLayout'
// import pic from '../pages/ContactImage/index.jpg'
import '/src/components/styles/custom.css'

const Contact = () => {
    
   return(
     <FooterLayout> 
     <h1 className="contact">Get In Touch !</h1>
     <div className="container">
     <div className="form">
     <div class="form-style-6">
        <h1>Contact Us</h1>
            <form action="https://formspree.io/f/mpzonppr" method="POST">
            <input type="text" name="name" required placeholder="Your Name" />
            <input type="email" name="_replyto" required placeholder="Email Address" />
            <textarea name="message" required placeholder="Type your Message"></textarea>
            <input type="submit" value="Send" />
            </form>
    </div>
     </div>
        <div className="details" >
        <div className="address">
        <span>Address:</span> <p> 151 Lordship Lane , Enfield, London, N22 1QL </p>
        <span> PO Box : </span> <p>PO Box 789, London, N21 1AL</p>
        <span>Telephone :</span> <p> 02081225662</p>
        <span>Email :</span> <p>info@wingchunacademy.co.uk </p>
        </div>
        </div>
       
     </div>
     <Map/>
  


     </FooterLayout>
   )
           
}
  
  export default Contact;
