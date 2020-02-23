import React, {useState} from 'react';
import Layout from '../core/Layout';
import UserForm from '../styled/UserForm';

const CreateProduct = () => {
    const [state, setState] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        quantity: '',
        shipping: '',
        photo: '',
        error: false,
        success: true
    })

    const { name, description, price, category, quantity, shipping } = state

    const handleChange = (name) => (e) => {
        setState({
            ...state,
            [name] : e.target.value
        })
    }

    const handleSubmit = () => {

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
            tagType: 'dropdown'
        },
        {
            label: "Shipping",
            name: "shipping",
            value: shipping,
            classname: "product-category",
            tagType: 'dropdown'
        }
    ],
        buttonText: 'Submit'}
    
    return (
         <Layout title= "" description="Create Product" className="container">
           <UserForm 
                items = {itemsToRender}
                handleChangeFunction = {handleChange}
                handleSubmitFunction = {handleSubmit}
           />
        </Layout>    
    )
}

export default CreateProduct