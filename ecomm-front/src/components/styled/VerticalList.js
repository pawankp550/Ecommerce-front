import React from 'react'
import { NavLink } from 'react-router-dom'

import './css/verticalList.scss'

const VerticalList = (props) => {
    const { products, quantityChange, removeProduct } = props

    const renderList = () => {
        return products.map(item => {
            const { _id, name, price, quantity, category, photo, basketQuantity } = item
            const imageUrl = photo.replace('upload/', 'upload/w_70,h_130,c_scale/')    
            return (
                <div className="verticallist" data-id={_id} data-quantity={quantity} key={_id}>
                    <NavLink to={`/product/${_id}`} className="verticallist-image">
                        <img src={imageUrl}/>
                    </NavLink>
                    <div className="verticallist-details">
                        <div className="verticallist-details-product-name">
                            {name}
                        </div>
                        <div className="verticallist-details-product-price">
                            &#8377; {price}
                        </div>
                        <div className="verticallist-details-product-quantity">
                            Quantity: <div className="verticallist-details-product-quantity-increase" onClick={quantityChange('increment', item)}><span >+</span></div>{basketQuantity}<div className="verticallist-details-product-quantity-decrease" onClick={quantityChange('decrement', item)}><span >-</span></div>
                        </div>
                    </div>
                    <div className="verticallist-options" onClick = {() => removeProduct(item)}>
                        <span className="remove-product">&#10006;</span>
                    </div>   
                </div>
            )
        })
    }

    return (
        renderList()
    )
}

export default VerticalList