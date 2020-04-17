import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from './Layout'
import VerticalList from '../styled/VerticalList'

import allActions from '../../actions'

const Cart = () => {
    const cartProduct = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    const onQuantityChange = (type, product) => {
        return (event) => {
            if(type === 'increment' && product.basketQuantity < product.quantity) {
                dispatch(allActions.cartActions.incrementQuantity(product))
            } else if((type === 'decrement' && product.basketQuantity > 1)) {
                dispatch(allActions.cartActions.decrementQuantity(product))
            }
        }
    }

    const onRemoveProductClick = (product) => {
        dispatch(allActions.cartActions.removeProduct(product))
    }

    return (
        <Layout>
            <VerticalList products = {cartProduct} removeProduct = {onRemoveProductClick} quantityChange = {onQuantityChange}/>
        </Layout>
    )
}

export default Cart