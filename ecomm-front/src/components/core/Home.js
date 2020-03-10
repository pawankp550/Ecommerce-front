import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { URL } from '../../config'
import { getProducts } from './coreAPI'
import ProductCard from '../styled/ProductCard'

const Home = () => {
    const [state, setState] = useState({
        popularProducts: '',
        newProducts: '',
        error: false
    })

    const getPopularProducts = async () => {
        const response = await getProducts('sold', 6)
        setState({...state, popularProducts: response})
    }

    const getNewProducts = async () => {
        const response = await getProducts('createdAt', 6)
        setState({...state, getNewProducts: response})
    }

    useEffect(() => {
        getPopularProducts()
        getNewProducts()
    }, [])

    return (
        <Layout title= "Home Page" description="Node React E-commerce App" >
            Home Page
            {URL}
            <ProductCard/>
        </Layout>
    )
}

export default Home