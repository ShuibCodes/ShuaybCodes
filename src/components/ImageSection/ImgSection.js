import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import './ImgSection.css'
function ImgSection() {
    return (
      <>
      <h2>Join Our Growing Community</h2>
<div className="container" >
       
       <Carousel >
<Carousel.Item interval={3000} style={{width: "1100px"}} >

<img style={{height:"600px", minWidth: "1100px"}} 
 className="d-block w-100"
 src={image1}
 alt="First slide"
/>
</Carousel.Item>
<Carousel.Item interval={3000} style={{width: "1100px"}}>
<img style={{height:"600px", minWidth:"1100px"}}
 className="d-block w-100"
 src={image2}
 alt="Second slide"
/>
</Carousel.Item>
<Carousel.Item interval={3000} style={{width: "1100px"}} >
<img style={{height:"600px", minWidth:"1100px"}}
 className="d-block w-100"
 src={image4}
 alt="Third slide"
/>
</Carousel.Item>
<Carousel.Item interval={3000} style={{width: "1100px"}} >
<img style={{height:"600px", minWidth:"1100px"}}
 className="d-block w-100"
 src={image5}
 alt="Third slide"
/>
</Carousel.Item>
</Carousel>
   </div>
      </>
        
    )
}

export default ImgSection
