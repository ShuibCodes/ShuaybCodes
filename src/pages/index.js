import React from "react"

import Layout from '../components/Layouts/layout'
import {homeObjOne } from '../components/HeroSection/Data'

import HeroSection from '../components/HeroSection/HeroSection'
import MidSection from "../components/MidSection./MidSection"
import ImgSection from "../components/ImageSection/ImgSection"

import Head from '../components/head'




const Index = () =>{
  return(
    <Layout>
      <Head title="Home" />
        <HeroSection {...homeObjOne} />
        <MidSection/>
        <ImgSection/>
       

        


      
    </Layout>
      
  )
}
 export default Index