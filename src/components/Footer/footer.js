import React from 'react'
import { Link } from 'gatsby'

import {GiHighKick} from 'react-icons/gi'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';


import '../Footer/footer.css'
import { IconContext } from 'react-icons';

const Footer = () =>{
        // const footerData = useStaticQuery(graphql`
        //     query{
        //         site{
        //             siteMetadata{
        //                 author
        //             }
        //         }
        //     }
        // `)

        const year = () => {
          let year = new Date().getFullYear()
          return year
        }

    return(
        <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Link to="/contact" ><button className="sub-btn"  >Subscribe</button></Link>
          </form>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <GiHighKick className='navbar-icon' />
              WCA
            </Link>
          </div>
          <small className='website-rights'>WingChunAcademy ©{ year()}</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            > 
              <IconContext.Provider value={{className:"size"}}>
              <FaFacebook />
             </IconContext.Provider>
             
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
               <IconContext.Provider value={{className:"size"}}>
              <FaInstagram />
             </IconContext.Provider>
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//https://www.youtube.com/channel/UC0V-RSnf2-26Upb77A4M5-A'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <IconContext.Provider value={{className:"size"}}>
              <FaYoutube />
             </IconContext.Provider>
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <IconContext.Provider value={{className:"size"}}>
              <FaTwitter />
             </IconContext.Provider>
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <IconContext.Provider value={{className:"size"}}>
              <FaLinkedin />
             </IconContext.Provider>
            </Link>
          </div>
        </div>
      </section>
    </div>
        
    )
    
}

export default Footer 
