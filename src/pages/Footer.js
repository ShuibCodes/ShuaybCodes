import React from 'react'
import NILogoFooter from '../components/NILogoFooter'
import '../components/NewStyles/Footer.css'
import {Link} from 'gatsby'
import {FaLinkedin, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'
import {FooterLinks,SiteMap,Numbers,Contacts, FooterContainer,SocialIcon, SocialMedia, SocialMediaWrap, SocialLogo,WebsiteRights,SocialIcons, SocialIconLink, FooterIcon} from '../components/FooterElements'
import NILogo from '../components/NILogoFooter'
import { IconContext } from 'react-icons/lib'

const Footer = () => {
    const year = ()=> {
        var d = new Date();
    var n = d.getFullYear();
    return n
      }

    return(

            <div class="footer-container">
            <div className="section-one">
            <p className="address" >Copyright Nutrition Integrated 2021 </p>
            
                <p className="address" >50-56 Thames Street Windosr W19 KLT</p>
                <p className="address" >Number: 10874863 | 07884 180 128</p>
            </div>
            <div className="section-two">
               <Link to="/about" ><h2 className="site-map" >About</h2></Link> 
               <Link to="/Features" ><h2 className="site-map" >Products</h2></Link> 
               <Link to="/contact" ><h2 className="site-map" >Resources</h2></Link> 
               <Link to="/dataset" ><h2 className="site-map" > Dataset</h2></Link> 
               <Link to="/reports" ><h2 className="site-map" >Reports</h2></Link> 
             
            </div>  
            <div className="section-three">
            <h2  className="follow-us">Follow us !</h2>
            <div>
            <IconContext.Provider  value={{ color:'white', size: '35px' }}>
                <FaInstagram/>
            </IconContext.Provider>
            </div>
         
        
            <div>
            <IconContext.Provider  value={{  color:'white', size: '35px' }}>
                <FaLinkedin/>
            </IconContext.Provider>
            </div>
            <div>
            <IconContext.Provider  value={{  color:'white', size: '35px' }}>
                <FaTwitter/>
            </IconContext.Provider>
            </div>

            </div>
            







            </div>
   
    )

}

export default Footer
