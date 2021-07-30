import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import FooterLayout from '../components/Layouts/BlogLayout'
import {BiRightArrowAlt} from 'react-icons/bi'
import {Helmet} from 'react-helmet'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)
    // https://www.youtube.com/watch?v=8t0vNu2fCCM&t=12856s
    return (
        <FooterLayout >
        <Helmet title="Blog" />
            <div className={blogStyles.background} >   
  
             <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                     
                 
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <div className={blogStyles.text}>
                               
                                    <h2 className="title" >{edge.node.title}</h2>
                                    <p className={blogStyles.para} >{edge.node.publishedDate}</p>
                                   
                                </div>
                            </Link>
                        </li>
                       
                       
                    )
                })}
            </ol>
            </div>
             

            
                 

        </FooterLayout>
       
        
    )
}

export default BlogPage
