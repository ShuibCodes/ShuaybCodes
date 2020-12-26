import React from 'react'
import './HeroSection.css'
import {Link} from 'gatsby'




const HeroSection = () => {


  const  handleClick =  () =>{
    console.log("clicked")
  }




    return (
        <div className="hero-container">
          <h1 className="Sitetitle" >The Wing Chun Academy  </h1>
          <div className="subheading">
                  <ul className="words">
                        <li className="each-word">  Wing-Chun </li>
                        <li className="each-word"> | BJJ | </li>
                        <li className="each-word"> Fitness </li>
                  </ul>
                </div>
          <div className="hero-btns">
           {/* <Link to="/about" > */}
                <button className="main-btn" onClick={handleClick} >Get Started</button>
           {/* </Link>  */}
          </div>
          <h2 className="header" > 3 Amazing Packages </h2>
        </div>

        
      )

    }
export default HeroSection