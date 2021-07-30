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

        
        <Blog/>

      

    </>
  )
}
 export default Index