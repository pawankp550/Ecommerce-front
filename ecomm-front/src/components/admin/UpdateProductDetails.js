import React, { useState, useEffect } from 'react'
import UserForm from '../styled/UserForm';
import { updateProduct, getCategories } from '../admin/adminAPI';
import { checkSignIn } from '../../auth';
import Loader from '../styled/Loader';
import Validation from '../styled/Validation';

const UpdateProductDetails = (props) => {
    const { product, categories } = props
    const { user } = checkSignIn()
    const [values, setValues] = useState({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category._id,
        quantity: product.quantity,
        shipping: product.shipping,
    })

    const [conditions, setConditions] = useState({
        error: false,
        success: false,
        loading: false
    })

    const { name, description, price, category, quantity, shipping } = values
    const { error, success, loading } = conditions

    const handleChange = (name) => (e) => {
        e.persist()
        
        const value = /imageData/i.test(name) ? e.target.files[0] : e.target.value

        setValues({
               ...values,
               [name] : value  
            })
    }

    const handleSubmit = async (e) => {
        setConditions({
            ...values,
            loading: true
        })
        e.preventDefault()
        const response = await updateProduct(values, product._id,  user.token)

        if (response.error) {
            setConditions({
               ...values,
               error : response.error.response.data.error,
               success : false,
               loading: false
            })
        } else {
            setConditions ({
                success : true,
                error : '',
                loading:false
            })

            const { name, description, price, category, quantity, shipping } = response.data
            setValues({
                ...values,
                name,
                description,
                price,
                category,
                quantity,
                shipping
            })
        }
    }

    const itemsToRender = {
        data: [{
            label: "Name",
            name: "name",
            inputType: "text",
            value: name,
            classname: "product-name",
            tagType: 'input'
        },
        {
            label: "Description",
            name: "description",
            inputType: "text",
            value: description,
            classname: "input-textarea product-description",
            tagType: 'textarea'
        },
        {
            label: "Price",
            name: "price",
            inputType: "number",
            value: price,
            classname: "product-price",
            tagType: 'input'
        },
        {
            label: "Quantity",
            name: "quantity",
            inputType: "number",
            value: quantity,
            classname: "product-quantity",
            tagType: 'input'
        },
        {
            label: "Category",
            name: "category",
            value: category,
            classname: "product-category",
            tagType: 'dropdown',
            defaultText: product.category.name,
            options: categories,
        },
        {
            label: "Shipping",
            name: "shipping",
            value: shipping,
            classname: "product-shipping",
            tagType: 'dropdown',
            defaultText: product.shipping.toString(),
            options: [{value: 'true', name: 'true'}, {value: 'false', name: 'false'}]
        } 
    ],
        buttonText: 'Submit'}
    
    return (
         <div >
            <div className="details-section-title"><h4>Update Details</h4> </div>
            {error ? <Validation data = {{type: 'error', text: error}} /> : ''}
            {success ? <Validation data = {{type: 'success', text: 'Success!'}} /> : ''}
            {loading? <Loader/> : <UserForm 
                items = {itemsToRender}
                handleChangeFunction = {handleChange}
                handleSubmitFunction = {handleSubmit}
           />}
        </div>    
    )
}

export default UpdateProductDetails