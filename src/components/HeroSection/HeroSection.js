import React from 'react'
import './HeroSection.css'
import chef from './images/Testtimonial1.jpg'

function HeroSection({
    lightBg, topLine, lightTextDesc, headline, lightText, description, buttonLabel, img, alt, imgStart
}) {
    return (<>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        
           <div className="this container">
                <div className="row home__hero-row">
                <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img className='home__hero-img' src={chef} alt="chef" ></img>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'} >{headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'} >{description}</p>
                            <button className="firstBtn" >See for more info</button>
                            
                        </div>
                    </div>
                

                </div>
           </div>
        </div>

      
    </>);
}

export default HeroSection