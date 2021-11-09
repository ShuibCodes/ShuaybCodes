import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./blog.module.scss"
import FooterLayout from "../components/Layouts/BlogLayout"
import { BiRightArrowAlt } from "react-icons/bi"
import { Helmet } from "react-helmet"
import "../pages/blogcss.css"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            image {
                fluid {
                  src
                  srcSet
                }
              }
          }
        }
      }
    }
  `)

  return (
    <FooterLayout>
      <Helmet title="Blog" />
      <section class="cards-wrapper">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <div class="card-grid-space">
            <Link to={`/blog/${edge.node.slug}`}>
              <a className="card">
                <img
                  className="card-image"
                  src={edge.node?.image?.fluid?.src}
                  alt="image"
                />
                <div className="blog-card">
                  <h1>{edge.node.title}</h1>
                  <p>
                    The syntax of a language is how it works. How to actually
                    write it. Learn HTML syntax…
                  </p>

                  <div class="tags">
                    <div class="tag">{edge.node.publishedDate}</div>
                  </div>
                </div>
              </a>
              </Link>
            </div>
          )
        })}
      </section>
    </FooterLayout>
  )
}

export default BlogPage

{
  /* <li className={blogStyles.post}>
<Link to={`/blog/${edge.node.slug}`}>
    <div className={blogStyles.text}>
   
        <h2 style={{fontSize:"25px", position:"relative", top:"10px"}}  className="title" >{edge.node.title}</h2>
        <p className={blogStyles.para} >{edge.node.publishedDate}</p>
        
    </div>
</Link> 
</li> */
}
