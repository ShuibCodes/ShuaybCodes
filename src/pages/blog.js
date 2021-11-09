import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./blog.module.scss"
import FooterLayout from "../components/Layouts/BlogLayout"
import { BiRightArrowAlt } from "react-icons/bi"
import { Helmet } from "react-helmet"
import "../pages/blogcss.css"
import Truncate from "react-truncate"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            intro {
              intro
            }
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
                      <Truncate
                        lines={2}
                        ellipsis={
                          <>
                            ... 
                          </>
                        }
                      >
                        {edge.node.intro.intro}
                      </Truncate>
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
