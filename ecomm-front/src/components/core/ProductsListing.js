import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import Checkbox from './PlpCheckbox'
import ProductList from '../styled/ProductList'

import './css/productListing.scss'

import { getCategories, getProducts } from './coreAPI';

const ProductsListing = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const getProductCategories = async () => {
        const response = await getCategories()
        if (response.error) {
            setError(true)
        } else {
            setCategories(response.data)
        }
    }

    const getAllProducts = async () => {
        const response = await getProducts()
        setProducts(response.data)
    }

    const init = () => {
       getProductCategories()
       getAllProducts()
    }

    useEffect(() => {
        init()
    }, []);

    const handleFilters = (filters, filterBy) => {
        console.log({filters, filterBy})
    }

    return (
        <Layout>
            <div className="productlisting">
                <div className="productlisting-left">
                    <Checkbox data={categories} title="Categories" handleFilters = {(filters) => {
                        handleFilters(filters, 'category')    
                    }}/>
                </div>
                <div className="productlisting-right">
                    <ProductList products = {products} className = "homepage-trending-products" title=""/>
                </div>
            </div>
        </Layout>
    )
}

export default ProductsListing