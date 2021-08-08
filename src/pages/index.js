import React from "react"

import Layout from '../components/Layouts/layout'


import Head from '../components/head'

import Blog from '../pages/blog'


const Index = () =>{





  return(
  <>
      <Head title="Home " />
        {/* <HeroSection {...homeObjOne} />
        <MidSection/>
        <ImgSection/>
        */}

        <Layout>
          <div className="about-me" >
            <p className="about-text" > Hi, I'm Shuayb 👋,   I'm a self-taught Developer  currrently working for a Sports Nutrition Company in the UK .
            My Journey into tech started on the Summer of 2020 and I'd love to have you along for the ride. I'm currrently working on Data visulation and Web Development using D3.js, React, GraphQL and Gatsby.  My personal projects include and NBA Stats App and various up-comming projects (github on my portfolio) </p>
          </div>
          
        <Blog/>
        </Layout>

        
        

      

    </>
  )
}
 export default Index
