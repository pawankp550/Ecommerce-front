import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { URL } from '../../config'
import { getProducts } from './coreAPI'
import Loader from '../styled/Loader'

import './css/home.scss'

import Search from './Search'
import ProductList from '../styled/ProductList'

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([])
    const [trendingProductLoaded, setTrendingProductLoaded] = useState(false)
    const [newProducts, setNewProducts] = useState([])
    const [newProductsLoaded, setNewProductsLoaded] = useState(false)
    const [error, setError] = useState(false)

    const getTrendingProducts = async () => {
        const response = await getProducts('sold', 5)
        if(response.error) {
            console.log(response.error)
        } else {
            setTrendingProducts(response.data)
            setTrendingProductLoaded(true)
        }
    }

    const getNewProducts = async () => {
        const response = await getProducts('createdAt', 5)
         if(response.error) {
            console.log(response.error)
        } else {
            setNewProducts(response.data)
            setNewProductsLoaded(true)
        }
    }

    useEffect(() => {
        getTrendingProducts()
        getNewProducts()
    }, [])
 
    return (
        <Layout title= "" description="" >
            <Search/>
            {trendingProductLoaded ? <ProductList products = {trendingProducts} className = "homepage-trending-products" title="BESTSELLERS"/> : <Loader />}
            {newProductsLoaded ? <ProductList products = {newProducts} className = "homepage-new-products" title="NEW ARRIVALS"/> : <Loader />}
        </Layout>
    )
}

export default Home