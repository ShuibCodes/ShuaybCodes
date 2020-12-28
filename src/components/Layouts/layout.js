import React from 'react'
import Header from '../Header'
import Footer from '../Footer/footer'
import '../styles/index.scss'
import LayoutStyles from '../Layouts/layout.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = (props) =>{
    return(
        <div className={LayoutStyles.container}>
        <div className={LayoutStyles.content}>
        <Header />
            {props.children}
        </div>
        <Footer />
        </div>
    )
}

export default Layout