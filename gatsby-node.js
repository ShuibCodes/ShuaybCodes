
// Generate slug for each post 

const path = require('path')

// getting path from templaaet (blog.js)
module.exports.createPages = async ({graphql, actions}) =>{
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    // fetch marchdown data
    // this graphql down here is a function that returns a promise, so mark this whole function as async
    const res = await graphql(`
    query{
        allContentfulLongPost{
          edges{
            node{
              title
              Slug
            }
          }
        }
      }
    
    `)
      // iterate over all the psots and run createpage function for each of them 
      res.data.allContentfulLongPost.edges.forEach((edge) => {
        createPage({
            component:  blogTemplate,
            path: `/blog/${edge.node.title}`,
            context: {
                slug: edge.node.Slug
            }
        })
      })



}