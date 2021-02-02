import React from "react"

// import Map from '../pages/Map.js'
import  FooterLayout from '../components/Layouts/BlogLayout'
// import pic from '../pages/ContactImage/index.jpg'
import '/src/components/styles/custom.css'

const Contact = () => {
    
   return(
     <FooterLayout> 
      <div class="form-style-6">
        <h1>Contact Us</h1>
            <form action="https://formspree.io/f/mpzonppr" method="POST">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="_replyto" placeholder="Email Address" />
            <textarea name="message" placeholder="Type your Message"></textarea>
            <input type="submit" value="Send" />
            </form>
    </div>


     </FooterLayout>
   )
           
}
  
  export default Contact;
