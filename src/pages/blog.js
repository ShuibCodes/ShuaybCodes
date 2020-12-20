import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import FooterLayout from '../components/BlogLayout'
import img from '../images/img-7.jpg'

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

    return (
        <FooterLayout>
        
                 <h1>Blog Title Here</h1>
                <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                     
                 
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <div className={blogStyles.text}>
                                    <h2 className={blogStyles.title} >{edge.node.title}</h2>
                                    <p className={blogStyles.para} >{edge.node.publishedDate}</p>
                                </div>
                            </Link>
                        </li>
                       
                       
                    )
                })}
            </ol>


        </FooterLayout>
       
        
    )
}

export default BlogPage