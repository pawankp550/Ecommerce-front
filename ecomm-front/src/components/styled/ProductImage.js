import React from "react";
import './css/productImage.scss'

const ProductImage = (props) => {
    const { url, alt } = props
    return (
        <div className="product-card-image">
            <img src={url} alt={alt}/>
        </div>
    )
}

export default ProductImage