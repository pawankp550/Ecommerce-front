import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Layout from './Layout'
import VerticalList from '../styled/VerticalList'
import Checkout from './Checkout'

import allActions from '../../actions'
import { checkSignIn } from '../../auth'
import { calculateTotal } from './helpers/carthelper'

import './css/cart.scss'

const Cart = () => {
    const products = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    const [isSignedIn, setIsSignedIn] = useState(false)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        setIsSignedIn(checkSignIn().isloggedIn)
        setCartTotal(calculateTotal(products))
    }, [products])

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

    const renderCart = () => {
        if(products.length > 0) {
            return (
                <div className ="cart">
                    <div className="cart-productList"><VerticalList products = {products} removeProduct = {onRemoveProductClick} quantityChange = {onQuantityChange} numberOfProducts= {products.length}/></div>
                    <div className="cart-summary"><Checkout isUserSignedIn = {isSignedIn} cartTotal = {cartTotal} /></div>
                </div>
            )
        } else {
            return (
                <>
                    <div><h1>Your cart is empty</h1></div>
                    <div><NavLink to={"/shop"}>Continue shopping</NavLink></div>
                </>    
            )
        }
    }
 
    return (
        <Layout>
            {renderCart()}
        </Layout>
    )
}

export default Cart