import React, {useState, useEffect} from 'react'
import NoProductsFound from '../styled/NoProductsFound'
import ProductList from '../styled/ProductList'

import './css/searchlist.scss'

const SearchList = (props) => {
    const { products , setSearched} = props
    const numberOfProducts = products.length
    
    const renderResult = () => {
        if(numberOfProducts > 0) {
            return (
                <>
                    <div className="searchlist-top"><h4>found {numberOfProducts} Result(s)</h4> <div><h4 className="close" onClick={setSearched}>&#10006;</h4></div> </div>
                    <ProductList products = {products} className = "searchlist-products" title=""/>
                </>    
            )
        } else {
            return (
                <>
                    <div className="searchlist-top searchlist-noproducts-top"><h4 onClick={setSearched} className="close">&#10006;</h4></div>
                    <NoProductsFound/>
                </>
            )
        }
    }
    return (
        <div className="searchlist-container">
            {renderResult()}
        </div>
    )
}

export default SearchList