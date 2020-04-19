import React, { useState, useEffect } from 'react'
import Button from '../styled/Button'
import { NavLink } from 'react-router-dom'
import DropIn from "braintree-web-drop-in-react";
import Loader from '../styled/Loader'
import Validation from '../styled/Validation'

import { checkSignIn } from '../../auth'
import { getBraintreeToken, processPayment } from './coreAPI'

const CartDetails = (props) => {
    const { cartTotal, isUserSignedIn, dispatch, cartActions, payment } = props

    const [data, setData] = useState({
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    })

    const { user } = checkSignIn()

    const setBraintreeToken = async (token) => {
        const response = await getBraintreeToken(token)
        if(response.error) {
            console.log(response)
            setData({...data, error: response.error.Error})
        } else {
            setData({...data, clientToken: response.data.clientToken})
        }
    }

    useEffect(() => {
        if (isUserSignedIn) {
            setBraintreeToken(user.token)
        }
    }, [isUserSignedIn])

    const buy = async () => {
        try {
                const response = await data.instance.requestPaymentMethod()
                const { nonce } = response

                const paymentData = {
                    amountFromClient: cartTotal,
                    paymentMethodNonce: nonce,
                }

                const paymentResponse = await processPayment(user.token, paymentData)
                setData({...data, success:paymentResponse.data.success})
                dispatch(cartActions.clearCart())
                payment.setSuccess(true)

        }
        catch(err) {
            console.log(err.message)
            setData({...data, error: err.message})
        }
    }

    const renderBraintreeDropIn = () => {
        if (data.clientToken) {
            return (
                <div onBlur = {() => { setData({...data, error:''}) }}>
                    <DropIn
                        options={{ authorization: data.clientToken }}
                        onInstance={(instance) => (data.instance = instance)}
                    />
                    <Button handleClick={ buy } className = "cart-checkout-btn">Pay</Button>
                </div>
                );
        } else {
            return (
                <div>
                    <Loader/>
                </div>
            );
        }
    }

    const renderError = (error) => {
        return (
            <Validation data = {{type: "error", text: error}}/>
        )
    }

    const renderSuccess = () => {
        return (
            <Validation data = {{type: "success", text: 'Transaction Succeeded'}}/>
        )
    }

    const renderButton = () => {
        if(isUserSignedIn) {
            return (
             renderBraintreeDropIn()
            )
        } else {
            return (
                <NavLink to={'/signin'}>
                    <Button className = "cart-signin-btn">Sign In to Checkout</Button>
                </NavLink>
            ) 
        }
    }
    
    return (
        <>
            <div className="cart-details-title"><h4>Your cart summary</h4></div>
            <div className="cart-details">
                <h3>Total: &#8377; {cartTotal}</h3>
                {data.error ? renderError(data.error) : ''}
                {data.success ? renderSuccess() : ''}
                {renderButton()}
            </div>
        </>
    )
}

export default CartDetails