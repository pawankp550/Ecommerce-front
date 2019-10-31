import React from 'react'
import Layout from './Layout'
import { URL } from '../../config'

const Home = () => {
    return (
        <Layout title= "Home Page" description="Node React E-commerce App" >
            Home Page
            {URL}
        </Layout>
    )
}

export default Home