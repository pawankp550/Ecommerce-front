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
    const [paymentSuccess, setPaymentSuccess] = useState(false)

    useEffect(() => {
        setIsSignedIn(checkSignIn().isloggedIn)
        setCartTotal(calculateTotal(products))
    }, [products])

    const onQuantityChange = (type, product) => {
        return (event) => {
            if(type === 'increment' && product.count < product.quantity) {
                dispatch(allActions.cartActions.incrementQuantity(product))
            } else if((type === 'decrement' && product.count > 1)) {
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
                    <div className="cart-checkout"><Checkout products = {products} isUserSignedIn = {isSignedIn} cartTotal = {cartTotal} dispatch = {dispatch} cartActions = {allActions.cartActions} payment = {{success: paymentSuccess, setSuccess: setPaymentSuccess}}/></div>
                </div>
            )
        } else if (paymentSuccess) {
            return (
                <>
                    <div><h1>Thank You for Your Order!</h1></div>
                    <div><NavLink to={"/shop"}>Continue shopping</NavLink></div>
                </>
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