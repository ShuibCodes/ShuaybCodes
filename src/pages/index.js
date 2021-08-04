import React, {useState} from "react"
import dataMan from '../images/man-charts.svg'
import pitching from '../images/pitching.svg'
import appData from '../images/posts.svg'
import feed from '../images/HeroImages/feed.png'
import scatter from '../images/HeroImages/scatter.png'
import histogram from '../images/HeroImages/histogram.png'
import Navbar  from '../components/Header'
import '../components/HeroSection/HeroSection.css'
// import Layout from '../components/Layouts/layout'
import Testimonials from '../components/Testimonials'
import Footer from '../pages/Footer'
import Head from '../components/head'

// import Blog from '../pages/blog'


const Index = () =>{





  return(
  <>
      <Head title="Home " />
      
      <div>
        <Navbar/>
                    <section class="showcase" >
        <div class="main-container grids">
            <div style={{position:"relative", bottom:"2.5rem" ,right:"5rem"}} class="showcase-text">
            <div style={{position:"relative", }} className="mainTitle"><br />
                <span className="title-span">Get in.</span>
                <span className="title-span"> Do Better.</span>
                <span className="title-span"> Where Next.</span>
                
            </div>
            <p className="site-intro">
                The only dedicated platform for data, analysis and insights into active nutrition. 
            </p>
            
            
                 <button className="hero-btn">Sign Up to..</button>
                 
        
         <div className="this" ></div>

            </div>
            <div class="showcase-form">
          
            <div>
           
  <div  class="carousel">
    <ul class="slides">
      <input type="radio" name="radio-buttons" id="img-1" checked />
      <li class="slide-container">
        <div class="slide-image">
        <img src={feed}/>
        </div>
        <div class="carousel-controls">
          <label for="img-3" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-2" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-2" />
      <li class="slide-container">
        <div class="slide-image">
          <img src={histogram}/>
        </div>
        <div class="carousel-controls">
          <label for="img-1" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-3" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-3" />
      <li class="slide-container">
        <div class="slide-image">
          <img src={scatter}/>
        </div>
        <div class="carousel-controls">
          <label for="img-2" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-1" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <div class="carousel-dots">
        <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
        <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
        <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
      </div>
    </ul>
  </div>
</div>
                    
            </div>
              
            </div>
            <div>
                <div className="this" ></div>
            </div>
   
</section>
<div className="benefits">
        <div className="benefit-one" >
        <img className="benefits-image" src={appData} alt="appData" ></img>
        <div className="benefits-block" >
                    <h4 className="benefit-title" >Data - In depth knowledge at scale</h4>

                    <p className="benefits-text" >An extensive product database that includes functional bars and drinks, protein powders and all products related to gaming across the EU and US.</p>
                      <ul className="benefits-points">
                        <li className="point">Covering startups, DTC, retailers and e-tailers.</li>
                        <li className="point">Nutrition, ingredients and flavour</li>
                        <li className="point">Claims and positioning</li>
                        <li className="point">Amazon price and revenue</li>
                        <li className="point">Industry informed categorisation</li>
                        <li className="point">Net change based on launches and delists</li>
                      </ul>
                    
                    </div>

        </div>
          <div className="benefit-one" >
        <img className="benefits-image" src={pitching} alt="appData" ></img>
        <div className="benefits-block" >
                    <h4 className="benefit-title" >Data - In depth knowledge at scale</h4>

                    <p className="benefits-text" >An extensive product database that includes functional bars and drinks, protein powders and all products related to gaming across the EU and US.</p>
                      <ul className="benefits-points">
                        <li className="point">Covering startups, DTC, retailers and e-tailers.</li>
                        <li className="point">Nutrition, ingredients and flavour</li>
                        <li className="point">Claims and positioning</li>
                        <li className="point">Amazon price and revenue</li>
                        <li className="point">Industry informed categorisation</li>
                        <li className="point">Net change based on launches and delists</li>
                      </ul>
                    
                    </div>

        </div>
        <div className="benefit-one" >
        <img className="benefits-image" src={dataMan} alt="appData" ></img>
        <div className="benefits-block" >
                    <h4 className="benefit-title" >Data - In depth knowledge at scale</h4>

                    <p className="benefits-text" >An extensive product database that includes functional bars and drinks, protein powders and all products related to gaming across the EU and US.</p>
                      <ul className="benefits-points">
                        <li className="point">Covering startups, DTC, retailers and e-tailers.</li>
                        <li className="point">Nutrition, ingredients and flavour</li>
                        <li className="point">Claims and positioning</li>
                        <li className="point">Amazon price and revenue</li>
                        <li className="point">Industry informed categorisation</li>
                        <li className="point">Net change based on launches and delists</li>
                      </ul>
                    
                    </div>

        </div>

        {/* <button onClick={() => setButtonPopup(true)}  className="float">Contact Us</button>
                 <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                 </Popup>
           */}
    
</div>
 
<Testimonials/>
    
        </div>
        <Footer/>


           

    </>
  )
}
 export default Index