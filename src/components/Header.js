import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

import {
  MobileIcon,
  Nav,
  
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLogo,
  NavMenu,
  NavLinks
} from "../components/NavbarElements"
import NILogo from "./NILogo"


const Header = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
    
      <IconContext.Provider value={{ color: "#141414" }}>
     
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo className="logo-title"  to="/" onClick={closeMobileMenu}>
              <h4 className="logo-title"  >
                <NILogo/>
              </h4>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars style={{color:"white"}} />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/about" > 
              About
              </NavLinks>
              </NavItem>
         
            
              <NavItem>
              <NavLinks to="/Features" > 
                Features
              </NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to="/contact" > 
               Resources
              </NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to="/" > 
               Reports
              </NavLinks>
              </NavItem>

         
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Header
