import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import Checkbox from './PlpCheckbox'
import RadioButton from './PlpRadioButton'
import ProductList from '../styled/ProductList'

import './css/productListing.scss'

import { getCategories, getProducts } from './coreAPI';
import { priceRanges } from './priceRanges';

const ProductsListing = () => {
    const [myFilters, setMyFilters] = useState({
        filters: {
            category: [],
            price: []
        }
    })
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [skip, setSkip] =  useState(0);
    const [limit, setLimit] = useState(10);
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

    const getPrice = (filterId) => {
       const priceRangesLength = priceRanges.length

       for (let i=0; i<priceRangesLength; i++) {
            if(priceRanges[i]._id === filterId) {
                return priceRanges[i].value
                break
            }                    
       }
    }

    const handleFilters = (filters, filterBy) => {
        const filterTemp = { ...myFilters }
    
        if (/price/i.test(filterBy)) {
            filters = getPrice(parseInt(filters))
        }
        filterTemp.filters[filterBy] = filters
        setMyFilters(filterTemp)
        console.log(myFilters)
    }

    return (
        <Layout>
            <div className="productlisting">
                <div className="productlisting-left">
                    <Checkbox data={categories} title="Filter By Categories" handleFilters = {(filters) => {
                        handleFilters(filters, 'category')    
                    }}/>
                    
                    <RadioButton data={priceRanges} title="Filter By Price" name="price" handleFilters = {(filters) => {
                        handleFilters(filters, 'price')    
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