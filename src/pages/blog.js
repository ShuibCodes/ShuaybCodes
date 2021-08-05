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
    const data = useStaticQuery(graphql`
        query {
            allContentfulLongPost(sort: {fields: updatedAt, order: DESC}) {
                edges {
                  node {
                    title
                    Slug
                    updatedAt(formatString:"MMMM Do, YYYY")
                  }
                }
              }
        }
    `)
    // https://www.youtube.com/watch?v=8t0vNu2fCCM&t=12856s
    return (
        <FooterLayout >
        <Helmet title="Blog" />
            <div className="blogs-group"  >   
  
             <ol >
                {data.allContentfulLongPost.edges.map((edge) => {
                    return (
                       
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
                })}
            </ol>
            </div>
             

            
                 

        </FooterLayout>
       
        
    )
}

export default BlogPage
