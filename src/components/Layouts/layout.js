import React from 'react'
import Header from '../Header'
import Footer from '../Footer/footer'
import '../styles/index.scss'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = (props) =>{
    return(
        <>
        <Header />
        <div>
            {props.children}
        </div>
        <Footer />
        </>
    )
}

export default Layout