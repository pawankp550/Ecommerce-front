import React, { useState, useEffect } from 'react'
import { fetchUserOrders } from './userAPI'
import Loader from '../styled/Loader'
import { NavLink } from 'react-router-dom'

const Orderlist = (props) => {
    const { user } = props
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    const init = async (token, userId) => {
        try {
            setLoading(true)
            const response = await fetchUserOrders(token, { userId })
            if(response.error) {
                setLoading(false)
                return console.log(response.error)
            } 
            setLoading(false)
            setOrders(response.data)
            console.log(response.data)
        } catch(err) {
            console.log(err)
        }
    }    
    useEffect(() => {
        init(user.token, user.publicProfile._id)
    }, [])

    const renderProducts = (item, index) => {
        const imageUrl = item.photo.replace('upload/', 'upload/w_70,h_130,c_scale/')
        return (
            <div className="product" key={index}>
                <NavLink to={`/product/${item._id}`} >
                    <div className="product-image">
                        <img src={imageUrl} />
                    </div>
                    <div className="product-details">
                        <div className="product-name">Name: {item.name}</div>
                        <div className="product-price">Price: {item.price}</div>
                        <div className="product-count">Quantity: {item.count}</div>
                    </div>
                </NavLink>
            </div>

        )
    }

    const renderOrders = () => {
       return orders.map((item, i) => {
           return (
                <div className="order" key={i}>
                    <div className="order-id"> <label>Order Id:</label> {item._id} </div>
                    {
                        item.products.map((item, i) => {
                            return (
                                renderProducts(item, i)
                            )
                        })
                    }
                    <div className="order-total"><label>Total:</label> {item.amount}</div>
                    <div className="order-address"><label>Address:</label> {item.address}</div>
                    <div className="order-status"><label>Status:</label> {item.status}</div>
                </div>
           )
        })
    }

    console.log(orders)
 
    return (
        <div className="orders-container">
            <div className="orders-title"><span>Order History</span></div>
            {loading ? <Loader/> : orders.length ? renderOrders() : <div className="no-orders-error"><span>You have not placed any orders</span></div>}
        </div>
    )
}

export default Orderlist