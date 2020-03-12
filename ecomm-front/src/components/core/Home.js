import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { URL } from '../../config'
import { getProducts } from './coreAPI'
import './css/home.scss'

import ProductList from '../styled/ProductList'

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([])
    const [newProducts, setNewProducts] = useState([])
    const [error, setError] = useState(false)

    const getTrendingProducts = async () => {
        const response = await getProducts('sold', 5)
        setTrendingProducts(response.data)
    }

    const getNewProducts = async () => {
        const response = await getProducts('createdAt', 5)
        setNewProducts(response.data)
    }

    useEffect(() => {
        getTrendingProducts()
        getNewProducts()
    }, [])
 
    return (
        <Layout title= "" description="" >
            <ProductList products = {trendingProducts} className = "homepage-trending-products" title="BESTSELLERS"/>
            <ProductList products = {newProducts} className = "homepage-new-products" title="NEW ARRIVALS"/>
        </Layout>
    )
}

export default Home