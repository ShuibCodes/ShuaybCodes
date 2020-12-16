import React from 'react'
import Header from './Header'

import '../styles/index.scss'
import LayoutStyles from './layout.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


const FooterLayout = (props) =>{
    return(
  
        <div className={LayoutStyles.content}>
        <Header />
            {props.children}
        </div>
        
     
    )
}

export default FooterLayout