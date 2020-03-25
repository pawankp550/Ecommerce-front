import React from "react";
import './css/productCard.scss';
import ProductImage from './ProductImage'
import Button from './Button'

const ProductCard = (props) => {
    const { name, description, _id, price, photo } = props.item

    return (
        <div className="product-card" data-id={_id}>
            <ProductImage url={photo} alt={name} />
            <div className="product-card-name">
                <span>{name}</span>
            </div>
            <div className="product-card-price">
                <span>&#8377; {price}</span>
            </div>
            <div className="product-card-desc">
                <p>{description}</p>
            </div>

            <div className="product-card-cta">
                <Button className = "submit-button">VIEW</Button>
            </div>
        </div>
    )
}

export default ProductCard