import { Link } from "gatsby"
import { DiScala } from "react-icons/di"
import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: rgba(15,86,15 );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
`
export const Contacts = styled.div`
 width: 200px;
 height:100%;
 display: flex;
 margin-right: 700px;
 @media screen and (max-width: 960px){
   
   margin-right:200px;
   width: 100px;
  } 

`

export const Numbers = styled.p`
flex: 1;
 text-align:center;
  color: white;
  font-size: 20px;
  min-width:600px;
  line-height: 1.9rem;
  position: relative;
  left: 10px;
  bottom: 45px;
  @media screen and (max-width: 960px){
    padding:60;
    line-height:1.3rem;
    font-size: 19px;
    bottom: 2px;
  } 

`

export const FooterLinks = styled(Link)`
  color:white;

`

export const SiteMap= styled.div`
  margin-left: 425px;
  list-style-type:none;

  
  @media screen and (max-width: 960px){
    display:none
  } 

`
export const FooterIcon = styled.img`
 margin-bottom: 16px;

`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;

 
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const SocialIcon = styled(DiScala)`
  margin-right: 10px;
  list-style:none;

`


export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 290px;
 
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 35px;
`