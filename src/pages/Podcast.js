import React from 'react'
import podcast from '../images/FW-podcast.png'

function Podcasts() {
    return (
      <div className="podcast-section">

          <img className="nick-img"  src={podcast} alt="Nick"  ></img>
            
          <p className="about-text" >Nick is an acknowledged expert and active leader in sport, exercise and nutrition for nearly a decade. The idea for Nutrition Integrated is a response to the challenge he faced when trying to use product data in consultancy projects.</p>

      </div>
      
    )
}

export default Podcasts
