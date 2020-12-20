import React from 'react'
import './HeroSection.css'
import {Link} from 'gatsby'


function HeroSection({
   
}) {
    return (
        <div className="hero-container">
          <h1>Name Here</h1>
          <div className="subheading">
                  <ul className="words">
                        <li className="each-word"> Travel | </li>
                        <li className="each-word"> Events | </li>
                        <li className="each-word"> Portraits | </li>
                  </ul>
                </div>
          <div className="hero-btns">
           <Link to="/about" >
                <button>Click me</button>
           </Link> 
          </div>
    
        </div>
      )
}

export default HeroSection