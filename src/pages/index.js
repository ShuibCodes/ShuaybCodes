import React from "react"
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import {homeObjOne } from '../components/HeroSection/Data'
// import HomeStyles from '../pages/Home.module.scss'
import HeroSection from '../components/HeroSection/HeroSection'
import MidSection from "../components/MidSection./MidSection"
// import Card2 from '../components/MidSection./Card2'




const Index = () =>{
  return(
    <Layout>
        <HeroSection {...homeObjOne} />
        <MidSection/>
        {/* <Card2/> */}


        


      
    </Layout>
      
  )
}
 export default Index