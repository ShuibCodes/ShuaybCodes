import React from 'react'
import NILogoFooter from './NILogoFooter'
import '../components/NewStyles/Footer.css'
import {FaLinkedin, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'
import {FooterLinks,SiteMap,Numbers,Contacts, FooterContainer,SocialIcon, SocialMedia, SocialMediaWrap, SocialLogo,WebsiteRights,SocialIcons, SocialIconLink, FooterIcon} from '../components/FooterElements'

const Footer = () => {
    return(
        <FooterContainer>
            <SocialMedia>
            <SocialMediaWrap>
 
                   <NILogoFooter /> 
          
              
                <SocialIcons>
                    <SocialIconLink href='https://www.linkedin.com/company/nutrition-integrated/' target="_blank" aria-label="Facebook">
                        <FaLinkedin/>
                    </SocialIconLink>
                    <SocialIconLink href='https://www.instagram.com/nutrition_integrated/' target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='https://twitter.com/NutritionInteg1' target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>   
            </SocialMedia>
            <Contacts>
                <Numbers className="address" >
                    Telephone: 0208360944
                    50-56 Thames Street
                    Windsor
                    W19 KLT
                </Numbers>
                <SiteMap>
                    <ul style={{color:"white", padding:"10px", position:"relative", bottom:"0.2rem", right:"28rem", display:"flex" }} >
                    
                     <FooterLinks to="/About" >
                    <li  style={{padding:"15px", fontSize:"24px", listStyleType:"none" }} >About </li>
                    </FooterLinks>
                
                    <FooterLinks to="/Features" >
                    <li  style={{padding:"15px", fontSize:"24px", listStyleType:"none" }} >Features</li>
                    </FooterLinks>

                             
                    <FooterLinks to="/Resources" >
                    <li  style={{padding:"15px", fontSize:"24px", listStyleType:"none" }}  >Resources</li>
                    </FooterLinks> 
                    </ul>
                </SiteMap>
            </Contacts>
        </FooterContainer>
    )

}

export default Footer
