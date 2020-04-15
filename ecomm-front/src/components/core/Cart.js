import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

import Layout from './Layout'
import VerticalList from '../styled/VerticalList'

const Cart = () => {
    const cartProduct = useSelector(state => state.cartState)
    const onQuantityChange = (type) => {
        return (event) => {
            console.log(type)
        }
    }

    return (
        <Layout>
            <VerticalList products = {cartProduct} quantityChange = {onQuantityChange}/>
        </Layout>
    )
}

export default Cart