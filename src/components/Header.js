import React from 'react'
import { Link } from 'gatsby'
//import './header.module.scss'
import headerStyles from './Navbar.module.scss'
import custom from '../pages/custom.scss'

const Header= () =>{
    

    

    return(
       <header className={headerStyles.container}>

            <Link to='/' className={headerStyles.title}> 
              <div className={headerStyles.title}> Title&Logo </div>
              
            </Link>     
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                    <Link  className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                    <Link    className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}to="/about">About</Link>
                    </li>
                    <li>
                    <Link    className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
       </header>
        
    )
}

export default Header