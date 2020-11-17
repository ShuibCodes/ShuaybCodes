import React from 'react'
import { Link, graphql,useStaticQuery } from 'gatsby'
//import './header.module.scss'
import headerStyles from './header.module.scss'
import custom from '../pages/custom.scss'

const Header= () =>{
    // using GraphQl API  to get access to query data to use. converting string graphql query to something we can use
   
   
   
   
   
    const data  = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            title    }
        }
      }
    `)

    return(
       <header className={headerStyles.header}>
            <h1>
                <Link  className={headerStyles.title} activeClassName={headerStyles.activeNavItem} to='/'>
                        {data.site.siteMetadata.title}
                </Link>
            </h1>
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