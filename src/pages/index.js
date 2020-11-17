import React from "react"
import custom from '../pages/custom.scss'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {Jumbotron, Button, Carousel, Card, Image, Container, Row, Col} from 'react-bootstrap'
import burger from '../images/burger.jpg'
import fish from '../images/fish.jpg'
import pasta from '../images/pasta.jpg'
import example from '../images/dish1.jpg'
import chef from '../images/chef.jpg'
import IndexStyles from '../pages/index.module.css'
import { Testimonials } from "../components/Testimonials"


const IndexPage = () =>{
  return(
    <Layout>
      <Jumbotron className="jum"> 
        <h2>We Make Award-Winning Recipes  </h2>
        <p>Intersted?</p>
      <Button className="this" variant="outline-info"> <Link to="/contact">Contact Us</Link></Button>
      <img src={chef} alt="chef pic" ></img>
      </Jumbotron>
      
      <Carousel className="images">
        <Carousel.Item onPause="hover" interval={300}>
          <img className='d-block w-120' src={example} alt="This is the first slide" />
          <Carousel.Caption className="dish1">
          <h3>This is a heading</h3>
            <p>This is the first slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  onPause="hover" interval={3000}>
        <img className='d-block w-120' src={example} alt="This is the second slide" />
        </Carousel.Item>
        <Carousel.Item  onPause="hover" interval={3000}>
        <img className='d-block w-120' src={example} alt="This is the third slide" />
        </Carousel.Item>
      </Carousel> 
        
  
          
      <Testimonials />



    </Layout>
      
  )
}
 export default IndexPage