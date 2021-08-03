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
              <h4 className="logo-title"  >Logo</h4>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
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
              <NavLinks to="/blog" > 
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
