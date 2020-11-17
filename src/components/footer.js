import React from 'react'
import { graphql,useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'
import { render } from 'react-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagramSquare,faFacebookSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';


const Footer = () =>{
        const footerData = useStaticQuery(graphql`
            query{
                site{
                    siteMetadata{
                        author
                    }
                }
            }
        `)

    return(
        <footer className={footerStyles.footer}>
                <p>{footerData.site.siteMetadata.author}, © 2020</p>
            <p>
                <ul className={footerStyles.footerItem}>
                    <li className={footerStyles.footerEach}> Instagram 
                    <FontAwesomeIcon icon={faInstagramSquare} size="1x" />
                    </li>
                    <li className={footerStyles.footerEach}>Facebook  <FontAwesomeIcon icon={faFacebookSquare} size="1x" /></li>
                    <li className={footerStyles.footerEach} >Youtube <FontAwesomeIcon icon={faYoutubeSquare} size="1x" />  </li>
                </ul>
            </p>
                    
        </footer>
        
    )
    
}

export default Footer 