import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from './Layout'
import ProductDetails from './ProductDetails'
import Loader from '../styled/Loader'
import ProductList from '../styled/ProductList'

import { getProduct, getRelatedProducts } from './coreAPI'
import allActions from '../../actions'

const ProductPage = (props) => {
    const id  = props.match.params.id
    const dispatch = useDispatch()

    const [product, setProduct] = useState([])
    const [hasProductLoaded, setHasProductLoaded] = useState(false)
    
    const [relatedProducts, setRelatedProducts] = useState([])
    const [hasrelatedProductsLoaded, sethasrelatedProductsLoaded] = useState(false)

    const getRelatedProductsList = async (productId, sortBy, limit) => {
        const response = await getRelatedProducts(productId, sortBy, limit)
        if  (response.error) {
            console.log(response.error)
        }   else {
            setRelatedProducts(response.data)
            sethasrelatedProductsLoaded(true)
        }
    }

    const getProductDetails = async (productId) => {
        const response = await getProduct(productId)
        if  (response.error) {
            console.log(response.error)
        }   else {
            setProduct(response.data)
            setHasProductLoaded(true)
            getRelatedProductsList(productId, 'sold', 4)
        }
    }

    useEffect(() => {
        getProductDetails(id)
    }, [props])

    const addToBagClick = () => {
        dispatch(allActions.cartActions.addProduct(product))
    }

    return (
        <Layout>
            <div className="product-page-main">
                {hasProductLoaded ? <ProductDetails addToBag = {addToBagClick} productetails = {product}/> : <Loader/>}
                {hasProductLoaded ? hasrelatedProductsLoaded ? <ProductList products = {relatedProducts} className = "productPage-related-products" title="RELATED PRODUCTS"/> : <Loader/> : ""}
            </div>
        </Layout>
    )
}

export default ProductPage