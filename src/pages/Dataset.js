import React from 'react'
import dataMan from '../images/man-charts.svg'
import bar from '../images/bar-image.jpg'
import powder from '../images/powder-image.jpg'

import Navbar from '../components/Header'
import Footer from '../pages/Footer'
import '../components/NewStyles/Resources.css'
import GeoMap from './GeoMap'
import nivoMap from '../components/nivoMap'
import info from '../images/bar-infographic.png'
function Dataset() {



    return (
        
            <div style={{height:"100%"}}>
      <Navbar/>
      <div className="infographic-section">
      <div  className="benefits">
        <div style={{position:"relative", top:"3rem"}} className="benefit-one" >
        <img className="bar-image" src={info} alt="appData" ></img>
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
        </div>
      </div>


      <div className="App">

{/* <div style={{ height: "300px" }}>
 <GeoMap/>
</div> */}

</div>
  

        <div className="benefits">
        <div className="benefit-one" >
        <img className="benefits-image" src={bar} alt="appData" ></img>
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
                    <img style={{width:"950px"}} className="benefits-image" src={powder} alt="appData" ></img>
        </div>
       
        {/* <button onClick={() => setButtonPopup(true)}  className="float">Contact Us</button>
                 <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                 </Popup>
           */}
    
</div>



    <div className="footer-dataset" >
      <Footer/>
      </div>
      </div>  
        
    )
}

export default Dataset
