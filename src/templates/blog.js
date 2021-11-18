import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  StyledLink,
  BlogLayout,
  Styledh1,
  Styledp,
} from "../components/ButtonElements"
import FooterLayout from "../components/Layouts/BlogLayout"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Layout from "../components/Layouts/layout"
import "../main.css"
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      image {
        file {
          url
        }
      }
    }
  }
`

// const imageData = useStaticQuery(graphql`
// query MyQuery {
//   allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
//     edges {
//       node {
//         title
//         slug
//         publishedDate(formatString: "MMMM Do, YYYY")
//         body {
//           json
//         }
//         image {
//           file {
//             url
//           }
//           fluid {
//             base64
//             sizes
//             aspectRatio
//             src
//             srcSet
//           }
//         }
//       }
//     }
//   }
// }

// `)

const Blog = props => {
  console.log(props)
  const options = {
    // gives us options on how specific node types are rendered
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-EU"]
        const url = node.data.target.fields.file["en-EU"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  function readingTime(text) {
    const wordsPerMinute = 225
    // flatten array, join by space and split into one big array
    const noOfWords = text.flat().join(" ").split(/ +/).length
    const minutes = noOfWords / wordsPerMinute
    const readTime = Math.ceil(minutes)
    return `${readTime} minute read`
  }

  const text = props.data.contentfulBlogPost.body.json.content.map(d =>
    d.content.map(e => e.value)
  )

  console.log(text)
  return (
    <Layout>
      <Helmet title="Blog Post" />

      <div className="page-container">
        {/* <Img fluid={imageData.file.fluid} alt="image"/> */}
        {/* <LazyLoadImage height={200} width={200}
      src={props.data.contentfulBlogPost.image.file.url}   
      alt="alger" 
    /> */}

        <h2 style={{ fontSize: "50px" }} className="title">
          {props.data.contentfulBlogPost.title}
        </h2>
        <Styledp>{props.data.contentfulBlogPost.publishedDate}</Styledp>
        <Styledp style={{ position: "relative", bottom: "0.4rem" }}>
          {readingTime(text)}
        </Styledp>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>
    </Layout>
  )
}

export default Blog
