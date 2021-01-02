import React, { Component } from 'react';
import './MidSection.css'
import {Link} from 'gatsby'
import {BsFillStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
import { IconContext } from 'react-icons'

class MidSection extends Component {
    
    render() {
        return (
            <div className="Grid-container" id="MidSection">
      
            <div class="center">
            <div className="header-container">
         
            </div>
            <div className="card1">
            <div class="property-card" id="card1">
             
              <div class="property-description">
                <h5 className="main-title" >Ultimate</h5>
                <span> <IconContext.Provider value={{className:"size"}} > <BsFillStarFill/> </IconContext.Provider></span>
                <span  className="price"> £30 </span>
                <p className="card-text" > Our premium, great value Ultimate package unlocks the full potential of The Academy, giving you unrivalled and completely unlimited access to martial arts and fitness classes  </p>
                <Link to="/contact" ><div class="button_cont" align="center"><a href="/contact" class="example_a" target="_blank" rel="nofollow noopener">Join Today</a></div> </Link> 
                    
              </div>       
            </div>
          </div>
            </div>
            
          <div class="center">
            <div className="property-card" id="card2">
            <div className="text">
            <a href="/contact" >
                <div class="property-image" >
                  <div class="property-image-title">
                  </div>
                </div></a>
              <div class="property-description"  >
              <h5 className="main-title" >Accelerator</h5>
                <span> <IconContext.Provider value={{className:"size"}} > <BsStarHalf/> </IconContext.Provider></span>
                <span  className="price"> £20</span>
               
                <p className="card-text" > Our Accelerator package will give you access to 1 Core Skills class and 3 beginners classes per week in either Wing Chun or BJJ*, but not both. After purchasing, just let us know.  </p>
                <div className="positioner" >  
                <Link to="/contact" ><div class="button_cont" align="center"><a href="/contact" class="example_a" target="_blank" rel="nofollow noopener">Join Today</a></div> </Link> 
                </div>
                
    
    
              </div>
            </div>
            
          </div>
          
         </div>
         <div class="center">
            <div className="property-card3" id="card3" >
    
            <div class="property-card">
            <div className="text">
            <a href="#contact">
                <div class="property-image">
                  <div class="property-image-title">
                  
                  </div>
                </div>
              </a>
              <div class="property-description">
              <h5 className="main-title" >Starter</h5>
                <span> <IconContext.Provider value={{className:"size"}} > <BsStar/> </IconContext.Provider></span>
                <span  className="price"> £15</span>
                <p className="card-text" > Our Starter package is ideal for those who are not sure if martial arts are for them, but they are eager to find out more without wanting to commit to the more in depth Beginners classes.</p>
                <Link to="/contact" ><div class="button_cont" align="center"><a href="/contact" class="example_a" target="_blank" rel="nofollow noopener">Join Today</a></div> </Link> 
    
              </div>
            </div>
            </div>
          </div>
          
         </div>
    
            </div>
           
    
           
        );
    }
}



export default MidSection;