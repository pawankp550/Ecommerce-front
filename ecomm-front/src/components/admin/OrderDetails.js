import React, { useState, useEffect } from 'react'
import Dropdown from '../styled/Dropdown'
import moment from 'moment'
import Orders from './Orders'

const OrderDetails = (props) => {
    const { order, orderStatuses } = props

    const [status, setStatus] = useState('')

    const renderProducts = (products) => {
        return products.map((item, i) => {
                return (
                    <div key={i} className="orders-product">
                        <div className="orders-product-name">
                            <label>Name:</label> {item.name}
                        </div>
                        <div className="orders-product-price">
                            <label>Price:</label> &#8377;{item.price}
                        </div>
                        <div className="orders-product-count">
                            <label>Count:</label> {item.count}
                        </div>
                        <div className="orders-product-id">
                            <label>Id:</label> {item._id}
                        </div>
                    </div>
                )
            })   
    }

    const formatStatus = () => {
        return orderStatuses.map(item => {
            return {
                name: item,
                value: order._id
            }
        })
    }

    const handleOrderChange = (name) => (e) => {
        e.persist()  
        setStatus(e.target.name)
        console.log({name: e.target.name, value: e.target.value})
    }
    
    const renderOrder = () => {
        return (
            <div className="orders">
                <div className="orders-status"><h4 >Status: {order.status}</h4> </div>
                <div className="orders-select"><Dropdown handleChangeFn = {handleOrderChange} data = {{name: "orderStatus", defaultText:'Change Status' , value: status, options: formatStatus(), classname: 'order-status-dropdown'}}/></div>
                <ul className="orders-details">
                    <li><label>Order ID:</label> {order._id}</li>
                    <li><label>Transaction ID:</label> {order.transaction_id}</li>
                    <li><label>Amount:</label> &#8377;{order.amount}</li>
                    <li><label>Ordered By:</label> {order.user.name}</li>
                    <li><label>Ordered on:</label> {moment(order.createdAt).format("MMM Do YYYY")}</li>
                    <li><label>Delivery Address:</label> {order.address}</li>
                </ul>
                <div className="orders-product-number">Total products in the order: {order.products.length}</div>
                {renderProducts(order.products)}
            </div>
        )
    }

    return (
        renderOrder()
    )
}

export default OrderDetails
