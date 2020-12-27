import { Link } from "gatsby"
import {GiHighKick} from 'react-icons/gi'
import styled from "styled-components"



export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#12e9e9"
      : "linear-gradient(to bottom,  rgba(255,255,255, 0.9) 0%,rgba(255,255,255,0) 100%)"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#12e9e9" : "#12e9e9")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  position: sticky;
  


`

export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-style: italic;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 800;

`

export const NavIcon = styled(GiHighKick)`
  margin: 0 0.5rem 0 2rem;
  
  height: 4rem;
  width: 6rem;
  position: relative;
  left: -0.5em;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.25s ease;
    background: #e0ffff 
  }
`

export const NavItem = styled.li`
  height: 80px;
  
  @media screen and (max-width: 960px) {
    width: 100%;
    
  }
`

export const NavLinks = styled(Link)`
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@600&display=swap');
  color: #141414;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-style: italic;
  text-decoration: none;
  margin-top:10px;
  font-size: 30px;
  &:hover {
      color: darkred;
      transition: all 0.3s ease;
      text-decoration: none;
    }


  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #ff4040;
      transition: all 0.3s ease;
      text-decoration: none;
    }
  }
`

