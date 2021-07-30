import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {StyledLink, BlogLayout, Styledh1, Styledp} from '../components/ButtonElements'
import FooterLayout from "../components/Layouts/BlogLayout"
import {Helmet} from 'react-helmet'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body{
        json
      }
    
    }
  }
`

const Blog = props => {
  const options = {
    // gives us options on how specific node types are rendered
      renderNode: {
          "embedded-asset-block": (node) =>{
            const alt = node.data.target.fields.title['en-US']
            const url = node.data.target.fields.file['en-US'].url
            return <img alt={alt} src={url} />
          }
      }
  }
  

  return (
    <FooterLayout>
    <Helmet title="Blog Post" />
      <BlogLayout>
      {/* <img src={props.contentfulBlogPost.image} /> */}
      <h2 style={{fontSize:"50px"}} className="title">{props.data.contentfulBlogPost.title}</h2>
      <Styledp>{props.data.contentfulBlogPost.publishedDate}</Styledp>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json,options)}
      </BlogLayout>
  
    </FooterLayout>
      
     
    
  )
}

export default Blog
