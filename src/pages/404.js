import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layouts/layout'

const NotFound = () => {
    return(
        <Layout>
            <h1>Whoops, Page not found</h1>
            <p><Link to="/" >Head Home</Link></p>
        </Layout>
    )
}

export default NotFound