import React, { useState, useEffect } from 'react'
import Button from '../styled/Button'
import { NavLink } from 'react-router-dom'

import { checkSignIn } from '../../auth'
import { getBraintreeToken } from './coreAPI'

const CartDetails = (props) => {
    const { cartTotal, isUserSignedIn } = props

    const [data, setData] = useState({
        success: false,
        clientToken: null,
        error: '',
        indtance: {},
        address: ''
    })

    const { user } = checkSignIn()

    const setBraintreeToken = async (token) => {
        const response = await getBraintreeToken(user.token)
        if(response.error) {
            console.log(response)
        } else {
            setData({...data, clientToken: response.clientToken})
        }
    }

    useEffect(() => {
        setBraintreeToken()
    }, [])

    const renderButton = () => {
        if(isUserSignedIn) {
            return (
                <NavLink to={'/signin'}>
                    <Button className = "cart-checkout-btn">Checkout</Button>
                </NavLink>
            )
        } else {
            return (
                <NavLink to={'/signin'}>
                    <Button className = "cart-signin-btn">Sign In</Button>
                </NavLink>
            ) 
        }
    }
    
    return (
        <>
            <div className="cart-details-title"><h4>Your cart summary</h4></div>
            <div className="cart-details">
                <h3>Total: &#8377; {cartTotal}</h3>
                {renderButton()}
            </div>
        </>
    )
}

export default CartDetails