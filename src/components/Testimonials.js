import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import pic from '../images/Testimonial2.jpg'
import pic2 from '../images/Testtimonial1.jpg'


export const Testimonials = () => {
    return (
      <TestimonialsContainer>
          <TopLine>
              Testimonials
          </TopLine>
              <Description>
                  What People are Saying
              </Description>
              <ContentWrapper>
                  <ColumnOne>
                      <Testimonial>
                        <IoMdCheckmarkCircleOutline />
                        <h3>Sean Paul</h3>
                        <p className="text" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun."</p>
                       
                      </Testimonial>
              
                  </ColumnOne>
                  <ColumnOne>
                  <Testimonial>
                          <FaRegLightbulb />
                          <h3>Sarah Lin</h3>
                          <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug"</p>
                      </Testimonial>
                  </ColumnOne>
    
              </ContentWrapper>
         
      </TestimonialsContainer>
    )
}
export default Testimonials

const TestimonialsContainer = styled.div`

background: #fcfcfc;
color: #000;
padding: 5rem calc((100vw - 1300px)/2);
height: 100%;
`
const TopLine = styled.p`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`
const Description = styled.p`
    text-align: start;
    padding-left:2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;

`
const ContentWrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 padding: 0 2rem;

 @media screen and (max-width: 768px){
     grid-template-columns: 1fr;
 }

`
const ColumnOne = styled.div`
    display: grid;
    grid-template-rows:1fr 1fr 1fr;
   
    
`
const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }
    p{
        color: #3b3b3b;
    }

`
const ColumnTwo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 2rem;
grid-gap: 10px;

@media screen and (max-width: 500px){
    grid-template-columns: 1fr;
}
`
