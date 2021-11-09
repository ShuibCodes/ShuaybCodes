import React from "react"

import Layout from '../components/Layouts/layout'


import Head from '../components/head'

import Blog from '../pages/blog'
import shuib from '../image/shuib.jpeg'
import "../pages/blogcss.css"

const Index = () =>{





  return(
  <>
      <Head title="Home " />
        {/* <HeroSection {...homeObjOne} />
        <MidSection/>
        <ImgSection/>
        */}

        <Layout>
          <div className=" about-me " >

          <img className="shuib" src={shuib} alt="image" />
            <p className="  about-text " > Hi, I'm Shuayb 👋,   I'm a self-taught Developer  currrently working for a Sports Nutrion Company in the UK .
            My Journey into tech started on the Summer of 2020 and I'd love to have you along for the ride. I write about productivity, lifestyle habits and minimalism. </p>
          </div>
          
        <Blog/>
        </Layout>

        
        

      

    </>
  )
}
 export default Index