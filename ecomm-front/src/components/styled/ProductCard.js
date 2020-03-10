import React from "react";
import './css/productCard.scss';
import Button from './Button'

const ProductCard = (props) => {
    

 return (
    <div className="product-card">
      <div className="product-card-image">
        <img src="https://res.cloudinary.com/pavank9738/image/upload/v1583739941/uqasl0ntlxagmfuaeawy.jpg" alt="Tecno Spark"/>
      </div>
      <div className="product-card-name">
        <span>Tecno Spark</span>
      </div>
      <div className="product-card-price">
        <span>Rs2000</span>
      </div>
      <div className="product-card-desc">
        <p>Packed with a 6000-mAh battery, this smartphone offers a long battery life so you can do more with it. It even features 4 GB of RAM to ensure that its performance is nothing but seamless.</p>
      </div>

      <div className="product-card-cta">
        <Button className = "submit-button">View</Button>
      </div>
    </div>
 )
}

export default ProductCard