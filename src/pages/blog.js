import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import blogStyles from './blog.module.scss'
import FooterLayout from '../components/Layouts/BlogLayout'
// import {BiRightArrowAlt} from 'react-icons/bi'
import {Helmet} from 'react-helmet'
import '../components/NewStyles/BlogCard.css'
import '../components/NewStyles/BlogStyles.css'
import bars from '../images/bars.jpeg'
const BlogPage = () => {

   // sorting feature:

    // when button is clicked, sort tags into alphabetical order based on slug

    const data = useStaticQuery(graphql`
        query {

            allContentfulLongPost(sort: {fields: updatedAt, order: DESC}) {
                edges {
                  node {
                    title
                    Slug
                    updatedAt(formatString:"MMMM Do, YYYY")

            allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
                edges {
                  node {
                    title
                    slug
                    publishedDate(formatString: "MMMM Do, YYYY")
                  }
                }
                nodes {
                  image {
                    file {
                      url
                    }

                  }
                }
              }
        }
    `)
console.log(data.allContentfulLongPost.edges.map((e) => e.node.title).sort())
  
    // https://www.youtube.com/watch?v=8t0vNu2fCCM&t=12856s




    
    return (
        <FooterLayout >
        <Helmet title="Blog" />

            <div className="blogs-group"  >   
  
             <ol >
                {data.allContentfulLongPost.edges.map((edge) => {
                    return (

            <div className={blogStyles.background} >   
              
             <ol className={blogStyles.posts}>
             <h2 >Posts</h2>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                     
                 
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <div className={blogStyles.text}>
                
                                    <h2 style={{fontSize:"25px", position:"relative", top:"10px"}}  className="title" >{edge.node.title}</h2>
                                    <p className={blogStyles.para} >{edge.node.publishedDate}</p>
                                   
                                </div>
                            </Link> 
                        </li>

                       
                        <div class="container-cards">

<div class="Card">
    <div class="Card-header">
        <img className="Card-image" src={bars} alt="bars"/> 
    </div>
    <Link to={`/blog/${edge.node.title}`}>
    <div class="Card-body">

<h4 className="Card-title" >{edge.node.title}</h4>
<p style={{fontSize:"14px", paddingTop:"5px"}} >{edge.node.title}</p>
<div class="Card-user">

<div class="user-info">



</div>
</div>
</div>
    </Link>

</div>
</div>
               


                       
                    )
                }).sort()}
            </ol>
            </div>
             

            
                 

        </FooterLayout>
       
        
    )
}

export default BlogPage
