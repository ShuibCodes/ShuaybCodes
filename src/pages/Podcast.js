import React from 'react'
import podcast from '../images/FW-podcast.png'

function Podcasts() {
    return (
      <div className="about-section">
      <h3 className="about-img" >
          <img className="nick-img"  src={podcast} alt="Nick"  ></img>
       </h3>        
      <div className="about-container">

      <div className="about-text-two" >
          <p className="text" >Nick is an acknowledged expert and active leader in sport, exercise and nutrition for nearly a decade. The idea for Nutrition Integrated is a response to the challenge he faced when trying to use product data in consultancy projects.</p>


      </div> 
      </div>
      </div>
    )
}

export default Podcasts
