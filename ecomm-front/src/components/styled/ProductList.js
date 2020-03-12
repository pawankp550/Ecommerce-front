import React from "react";
import './css/productList.scss';
import ProductCard from '../styled/ProductCard'

const ProductList = (props) => {
    const { products, className, title } = props
    const renderCards = (products) => {
       return products.map((item, i) => {
           item.photo = item.photo.replace('upload/', 'upload/w_200,h_370,c_scale/')
           return (<ProductCard item = {item} key={i}/>)
       })
    }
    return (
             <section className =  "product-list-wrapper">
                <div className = "product-list-title">
                    <span >{title}</span>
                </div>
                <div className={className + " product-list-products"}>
                    {renderCards(products)}
                </div>
            </section>
    )
}

export default ProductList