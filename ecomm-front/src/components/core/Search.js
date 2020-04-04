import React, {useState, useEffect} from 'react'
import Dropdown from '../styled/Dropdown'
import Button from '../styled/Button'
import errorHandler from './errorHandler'
import Validation from '../styled/Validation'
import SearchList from './SearchList'

import { getCategories, findProducts } from "./coreAPI";
import './css/search.scss'

const Search = () => {
   
    const [searchFormData, setSearchFormData] = useState({
        categories: [],
        searchCategory: '',
        searchText: '',
        searched: false,
        searchResult: [],
        hasError: false,
        errorText: ''
    })

    const { categories, searchCategory, searchText, searched, searchResult, hasError, errorText } = searchFormData

    const getProductCategories = async () => {
        const response = await getCategories()

        if(response.error) {
            console.log(response.error)
        } else {
            const categoryData = response.data.map(item => {
                const { _id, name} = item
                return {value: _id, name}
            })
            categoryData.unshift({value: '', name: 'ALL'})
            setSearchFormData({...searchFormData, categories: categoryData})
        }
    }
    useEffect(() => {
        getProductCategories()
    }, [])

    const handleChange = (name) => (e) => {
        e.persist()  
        const value = e.target.value

        setSearchFormData({
               ...searchFormData,
               [name] : value  
            })  
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errorHandlerValue = errorHandler(['required'], searchText)
        
        if(errorHandlerValue.error) {
            setSearchFormData({...searchFormData, hasError: true, errorText: errorHandlerValue.message})

        } else {
            const response = await findProducts({ name: searchText, category: searchCategory })
            setSearchFormData({...searchFormData, searched:true, searchResult: response.data, hasError: false})
        }
    }

    const setSearched = () => {
         setSearchFormData({...searchFormData, searched:false, searchText:'', searchResult: []})
    }

    return (
        <>
        <div className="product-search">
            {hasError ? <Validation data = {{text: errorText, type: "error"}}/> : ''}
            <form className="product-search-from" onSubmit={handleSubmit}>
                <Dropdown handleChangeFn = {handleChange} data = {{name: "searchCategory", defaultText:'Select Category' , value: searchCategory, options: categories, classname: 'product-search-category'}}/>
                <input type="search" validations={["required"]} value={searchText} placeholder="Search By Name" className="product-search-input" onChange={handleChange("searchText")}></input>
                <Button className = "product-search-button">SEARCH</Button>
            </form>
        </div>
        {searched && searchText.length > 0? <SearchList products = {searchResult} setSearched = {setSearched}/> : ''}
        </>
    )
}

export default Search