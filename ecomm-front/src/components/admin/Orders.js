import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import { checkSignIn } from '../../auth'
import { getOrders } from './adminAPI'
import moment from 'moment'

const Orders = () => {
    const { user } = checkSignIn()
    const [orders, setOrders] = useState([])
    const [error, setError] = useState('')

    const fetchOrders = async () => {
        try {
            const response = await getOrders(user.token)
            if (response.error) {
                console.log(response.error)
                setError(response.error)
            } else {
                setOrders(response.data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    const renderOrderLength = () => {
        if(orders.length > 0) {
          return (
              <div><h3>Total Orders: {orders.length}</h3></div>
          )  
        } else {
            return (
                <div><h3>No orders</h3></div>
            )
          }
    }

    const renderOrders = () => {
        return orders.map((order, oIndex) => {
            return (
                <div key = {oIndex}>
                    <h4>{order._id}</h4>
                    <ul>
                        <li>Status: {order.status}</li>
                        <li>Transaction ID: {order.transaction_id}</li>
                        <li>Amount: &#8377;{order.amount}</li>
                        <li>Ordered By: {order.user.name}</li>
                        <li>Ordered on: {moment(order.createdAt).format("MMM Do YYYY")}</li>
                        <li>Delivery Address: {order.address}</li>
                    </ul>
                    <h3>Total products in the order: {order.products.length}</h3>
                </div>
            )
        })
    }

    return (
        <Layout>
            <div>
                {renderOrderLength()}
                {renderOrders()}
            </div>
        </Layout>
    )
}

export default Orders