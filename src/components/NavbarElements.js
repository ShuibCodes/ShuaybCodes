import { Link } from "gatsby"
import {GiHighKick} from 'react-icons/gi'
import styled from "styled-components"



export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#f9f9f9"
      : "#f9f9f9"};
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
  margin-left: 45rem;

  @media screen and (max-width:780px){
    margin-left: -3rem;
 
  }

`

export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.1rem;
  display: flex;
  align-items: center;
  font-style: italic;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 800;
  margin-left: -33rem;
  &:hover{
    text-decoration: none;
  }

  @media screen and (max-width: 960px){
    margin-left: 7rem; 
    font-size:45px;
  }

`

export const NavIcon = styled(GiHighKick)`
  margin: 0 0.5rem 0 2rem;
  margin-left: -10rem;
  height: 4rem;
  width: 6rem;
  position: relative;
  left: -0.5em;
  @media screen and (max-width: 960px){
   display: none;
  }
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
    background: white; 
  }
`

export const NavItem = styled.li`
  height: 80px;
  margin-right: 100px;
  
  @media screen and (max-width: 960px) {
    width: 100%;
    
  }
`

export const NavLinks = styled(Link)`

  color: #141414;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
 font-family: monospace;
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

