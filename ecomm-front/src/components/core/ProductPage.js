import React, { useState, useEffect } from 'react'

import Layout from './Layout'
import ProductDetails from './ProductDetails'
import Loader from '../styled/Loader'

import { useParams } from "react-router-dom"

import { getProduct } from './coreAPI'

const ProductPage = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({})
    const [hasProductLoaded, setHasProductLoaded] = useState(false)

    const getProductDetails = async (productId) => {
        const response = await getProduct(productId)
        if  (response.error) {
            console.log(response.error)
        }   else {
            setProduct(response.data)
            setHasProductLoaded(true)
        }
    }

    useState(() => {
        getProductDetails(id)
    })

    return (
        <Layout>
            <div>
                {hasProductLoaded ? <ProductDetails productetails = {product}/> : <Loader/>}
            </div>
        </Layout>
    )
}

export default ProductPage