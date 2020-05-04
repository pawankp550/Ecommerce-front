import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import UpdateProductDetails from './UpdateProductDetails'
import Loader from '../styled/Loader'

import './css/updateOrder.scss'

import { getProduct, getCategories } from './adminAPI'

const UpdateProduct = (props) => {
    const id  = props.match.params.id

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [error, setError] = useState('')

    const fetchCategories = async () => {
        const response = await getCategories()
        if(response.error) {
            setError(response.error)
            setLoading(false)
            return
        }
        const categoryData = response.data.map(item => {
            const { _id, name} = item
            return {value: _id, name}
        })
        setCategories(categoryData)
        setLoading(false)
    }

    const getProductDetails = async (productId) => {
        const response = await getProduct(productId)
        if(response.error) {
            setError(response.error)
            setLoading(false)
            return
        }
        setProduct(response.data)
        fetchCategories()
    }

    const init = (productId) => {
        getProductDetails(productId)
    }

    useEffect(() => {
        init(id)
    }, [])

    return (
        <Layout>
            <div>{loading ? <Loader/> : <UpdateProductDetails categories = {categories} product={product}/>}</div>
        </Layout>
    )
}

export default UpdateProduct