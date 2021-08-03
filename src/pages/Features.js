import React, {useState} from 'react'
import '../components/NewStyles/Features.css'
import slides from  '../images/data-trends.svg'
import{ Link } from 'gatsby'
import reports from  '../images/reports.svg'
// import Popup from './HeroSection/PopUp'
import Navbar from '../components/Header'
import {FcBullish} from 'react-icons/fc'
import {FcIdea} from 'react-icons/fc'
import {FcDataSheet} from 'react-icons/fc'
import {FcParallelTasks} from 'react-icons/fc'
import { IconContext } from 'react-icons/lib'
// import Popup from '../components/HeroSection/PopUp'
// import '../components/HeroSection/Contact.scss'
// import Footer from '../components/Footer/Footer'

function Features() {
    const [buttonPopup, setButtonPopup] = useState(false)
//   const [buttonPopup, setButtonPopup] = useState(false)

    return (    
      <>
           <Navbar />
           <div className='platformFeatures'>
    
        <div class="grid-container">
        <div class="the-feed" style={{marginTop:"10px"}}>
        <div className="header">
               <span className="platform">
                   The Platform
               </span>
           </div>
            <img className="platform-image" src={slides} alt="slides"></img>
        </div>
        <div className="featureLeft">
            <IconContext.Provider value={{  size: '50px' }}>
            <FcParallelTasks style={{justifyContent:"center"}} />
            </IconContext.Provider>
            <h2 className="featureTitle">Brand Directory</h2>
            <div className="features">
            <p> An up-to-date directory of all brands in the sports and active nutrition market across the EU and US, including the product types and categories that they cover. </p>
            </div>
          
          
        </div>
   
        
        
        
        
        <div className="featureRight" >
        <IconContext.Provider value={{  size: '50px'}}>
            <FcDataSheet style={{justifyContent:"center"}} />
            </IconContext.Provider>
            <h2 className="featureTitle">Product analyser: trends, analyse, explore.</h2>
            <div className="features">
            <p> Our platform allows you to see the data for yourself, analyse products or categories of interest, and identify similar products and white space. Dive deep to find out more about the ingredients, nutritional information, claims, formats and flavours of products. 
  </p>
            </div>
        </div>
        <div className="marginBottom">
        <div className="featureLeft">
        <IconContext.Provider value={{  size: '50px'}}>
            <FcIdea style={{justifyContent:"center"}} />
            </IconContext.Provider>
            <h2 className="featureTitle">Content</h2>
            <div className="features">
            <p>Access to over 50 articles (with weekly additions) covering industry news, interesting brands and products, data insights, trends and foresights. Conveying our knowledge and expertise to help you better understand what is going on in the industry, how this is reflected in the products and what we think the future holds. We combine analysis of the most up to date brand and product data with our knowledge and expertise of the market to provide a deep level of understanding of the landscape, trends and opportunities for innovation </p>
            </div>
            
        </div>
        </div>
    
         <div class="marginBottom">
         <div className="featureRight">
         <IconContext.Provider value={{  size: '50px'}}>
            <FcBullish style={{justifyContent:"center"}} />
            </IconContext.Provider>
             <h2 className="featureTitle">New product feed </h2>
                <div className="features">
                <p>We will also provide an immersion workshop for you and your team, to help you better understand the report, ask questions and learn what this (the market/report) means for you/how it can help you and your business.  </p>
                </div>
        </div>

         </div>
      </div>
           </div>
           
           <div className='ReportsFeatures'>

        <div class="grid-container">
        <div class="the-feed" style={{marginTop:"10px"}}>

        <div className="header">
               <span className="platform">
              Services 
               </span>
           </div>
            <img className="reports-image" src={reports} alt="slides"></img>
        </div>
        <div className="featureLeft">
            <IconContext.Provider value={{  size: '50px'}}>
            <FcParallelTasks style={{justifyContent:"center"}} />
            </IconContext.Provider>
           <Link to='/Reports' ><h2 className="featureTitle">Reports </h2></Link> 
            <div className="features">
            <p>An overview and our take on how the market looks right now, how it has changed over time and where it is likely to go in the future. We combine analysis of the most up to date brand and product data with our knowledge and expertise of the market to provide you with a deeper level of understanding of the landscape, trends and opportunities for innovation.</p>
            </div>         
        </div>
        
        <div className="featureRight" >
        <IconContext.Provider value={{ size: '50px'}}>
            <FcDataSheet style={{justifyContent:"center"}} />
            </IconContext.Provider>
            <h2 className="featureTitle">Workshops</h2>
            <div className="features">
            <p>We will also provide an immersion workshop for you and your team, to help you better understand the report, ask questions and learn what this (the market/report) means for you/how it can help you and your business. 
                </p>
            </div>
            
        </div>

    
        {/* <button onClick={() => setButtonPopup(true)}  className="float">Contact Us</button>
                 <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                 </Popup>
           */}
      </div>
           </div>
           {/* <button onClick={() => setButtonPopup(true)}  className="float">Contact Us</button>
                 <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                 </Popup> */}
          
           {/* <Footer /> */}
    </>
    )
}

export default Features
