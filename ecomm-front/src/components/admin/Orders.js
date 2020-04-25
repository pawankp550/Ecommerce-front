import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import OrderDetails from './OrderDetails'
import { checkSignIn } from '../../auth'
import { getOrders, getOrderStatuses } from './adminAPI'

import './css/orders.scss'

const Orders = () => {
    const { user } = checkSignIn()
    const [orders, setOrders] = useState([])
    const [orderStatuses, setOrderStatuses] = useState([])
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

    const fetchOrderStatuses = async () => {
        try {
            const response = await getOrderStatuses(user.token)
            if (response.error) {
                console.log(response.error)
                setError(response.error)
            } else {
                setOrderStatuses(response.data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchOrders()
        fetchOrderStatuses()
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
                <OrderDetails key={oIndex} order = {order} user = {user} orderStatuses={orderStatuses} fetchOrders = {fetchOrders} />
            )
        })
    }

    return (
        <Layout>
            <div className="orders-main">
                {renderOrderLength()}
                {renderOrders()}
            </div>
        </Layout>
    )
}

export default Orders