import React, {useState,useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import logo from '../images/Brands/logo.png'
import volac from '../images/Brands/volac-logo.png'
import '../components/NewStyles/Testimonials.css'

function Testiominals() {
  


const example = [
  {
    text: "Testimonial Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, "
  },
  {
    text: "Testimonial Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, "
  },
  {
    text: "Testimonial Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, "
  }
]
       
return(
    <>
  <div className="slider-container" >
  <Carousel interval={40000}>
      {example.map((e) => 
            <Carousel.Item  >
              <div style={{ height: 500}}>
              <div className="wraper">
              <div className="slider-text">
                <div className="content">
                <p classNameName="testimonial-text">
                {e.text}
                </p>
                </div>
              </div>
              <div className="slider-image"> 
                    <img style={{position:"relative", top:"10rem"}}  src={logo} alt="logo" />
              
              </div>
            </div>
            </div>

              <Carousel.Caption>
         </Carousel.Caption>
            
            </Carousel.Item>      
        )}
        
      </Carousel>
  
      
    </div>
        <div className="mobile-testimonials">
        <div className="testimonial-title" >
                <h1>Testimonials</h1>

            </div>
            <div class="brand-text" >
                 
                    <p className="quote" >" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock" </p>
            </div>
            <div class="brand-text" >
                 
                 <p className="quote" >" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock" </p>
         </div>
         <div class="brand-text" >
                 
                 <p className="quote" >" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock" </p>
         </div>
        </div>
     
  </>
    )
}

export default Testiominals
