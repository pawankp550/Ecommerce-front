import React, { useState, useEffect } from 'react'
import Button from '../styled/Button'
import moment from 'moment'
import './css/productDetails.scss'


const ProductDetails = (props) => {
    const { productetails, addToBag } = props
    const { _id, name, description, price, quantity, category, shipping, photo, createdAt } = productetails

    return (
        <div className="productdetails">
            <div className="productdetails-image">
                <img src={photo}/>
            </div>
            <div className="productdetails-details">
                <div className="productdetails-details-product-name">
                    <h2>{name}</h2>
                </div>
                <div className="productdetails-details-product-category">
                    <h4>In { category.name}</h4>
                </div>
                <div className="productdetails-details-product-price">
                    <h4>&#8377; {price}</h4>
                </div>
                <div className="productdetails-details-product-isInStock">
                    {quantity > 0 ? <span>In stock</span> : <span>Out of Stock</span>}
                </div>
                <div className="productdetails-details-product-add-to-bag">
                    <Button className="productdetails-product-add-to-bag-btn" handleClick={addToBag}>ADD TO BAG</Button>
                </div>
                <div className="productdetails-details-product-shipping">
                    <span>Shippable: { shipping ? <span>Yes</span> : <span>Downloadable</span>}</span>
                </div>
                <div className="productdetails-details-product-created">
                    <span>Added: {moment(createdAt).startOf('day').fromNow()}</span>
                </div>
                <div className="productdetails-details-product-descrption">
                    <span>Description</span>    
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails