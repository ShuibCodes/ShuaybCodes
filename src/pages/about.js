import React from 'react'
import Bridge2Food from '../images/Bridge2Food-Logo.png'

import eggyFood from '../images/Brands/eggyfood_white.png'
import fcampina from '../images/Brands/fcampina.png'
import Nick from '../images/Nick.jpeg'
import gencore from '../images/Brands/gencore-logo.png'

import givaudan from '../images/Brands/givaudan.png'

import healthspan from '../images/Brands/healthspan-logo.png'

import kerry from '../images/Brands/kerry-logo.png'

import bounce from '../images/Brands/Logo_Bounceballs.png'

import logo from '../images/Brands/logo.png'

import volac from '../images/Brands/volac-logo.png'
import Navbar from '../components/Header'

// import Footer from '../pages/Footer'

function About() {
    return (
        <>
        <Navbar/>
        <div>
        <div className="about-section">
        <h3 className="about-img" >Image </h3>        
        <div className="about-container">

     
            <p className="text" >We are industry insiders. Fifteen years of experience working with brands, ingredient suppliers and retailers on strategy and innovation. Our tools help you get in, do better or establish where next in the market.
            We are industry insiders. Fifteen years of experience working with brands, ingredient suppliers and retailers on strategy and innovation. Our tools help you get in, do better or establish where next in the market.</p>


    
        </div>
        </div>
        <div className="about-section">
        <h3 className="about-img" >
            <img className="nick-img"  src={Nick} alt="Nick"  ></img>
         </h3>        
        <div className="about-container">

        <div className="about-text-two" >
            <p style={{fontSize:"24px", lineHeight:"2.3rem"}} className="text" >Nick is an acknowledged expert and active leader in sport, exercise and nutrition for nearly a decade. The idea for Nutrition Integrated is a response to the challenge he faced when trying to use product data in consultancy projects.</p>


        </div> 
        </div>
        </div>
         
         






                <div className="brands" >
                    <h2 className="brands-title">Brands we have worked with</h2>

                <div className="flex-container"  >

           
        
                <div className="brand-images">
                    <img  className="brand-logo" src={Bridge2Food} alt="Bridge2Food"></img>
                    <img className="brand-logo" src={eggyFood} alt="Bridge2Food"></img>
                    <img className="brand-logo" src={fcampina} alt="Bridge2Food"></img>

                    <img className="brand-logo" src={gencore} alt="Bridge2Food"></img>

                    <img className="brand-logo" src={givaudan} alt="Bridge2Food"></img>
                    <img className="brand-logo" src={healthspan} alt="Bridge2Food"></img>

                    <img className="brand-logo" src={kerry} alt="Bridge2Food"></img>
                
                    <img className="brand-logo" src={bounce} alt="Bridge2Food"></img>

                    <img className="brand-logo" src={logo} alt="Bridge2Food"></img>
                    <img className="brand-logo" src={volac} alt="Bridge2Food"></img>



           

                </div>
                </div>
            </div>
        </div>
        {/* <Footer/> */}
        </>
    )
}

export default About
