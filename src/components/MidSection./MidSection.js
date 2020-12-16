import React from 'react'
import './MidSection.css'

function MidSection() {
    return (
       <div className="container">

<div className="Flex-container"  >
        <div class="center">
        <div class="property-card">
          <a href="#">
            <div class="property-image">
              <div class="property-image-title">
              
              </div>
            </div></a>
          <div class="property-description">
            <h5> Card Title </h5>
            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
          </div>
          
    
                <button className="cardBtn" > For More Info --> </button>
       
          
        </div>
      </div>
      <div class="center">
        <div class="property-card">
        <div className="text">
        <a href="#">
            <div class="property-image">
              <div class="property-image-title">
              
              </div>
            </div></a>
          <div class="property-description">
            <h5> Card Title </h5>
            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
          </div>
        </div>
         
          
    
                <button className="cardBtn" > See For More Info --> </button>
       
          
        </div>
      </div>
     </div>
     

       </div>
       

       
    )
}

export default MidSection
