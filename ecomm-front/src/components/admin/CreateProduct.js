import React, {useState, useEffect} from 'react';
import Layout from '../core/Layout';
import UserForm from '../styled/UserForm';
import { createProduct } from '../admin/adminAPI'
import { checkSignIn } from '../../auth';

const CreateProduct = () => {
    const { user } = checkSignIn()
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        quantity: '',
        shipping: '',
        photo: '',
        error: false,
        success: true,
        formData: ''
    })

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
    }, []);

    const { name, description, price, category, quantity, shipping, photo, formData } = values

    const handleChange = (name) => (e) => {
        e.persist()
        
        const value = /photo/i.test(name) ? e.target.files : e.target.value
        setValues({
            ...values,
            [name] : value
        })
        formData.set(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createProduct(formData, user.token)
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
        },
        {
            label: "Images",
            name: "photo",
            value: photo,
            classname: "product-images",
            tagType: 'image',
            inputType: 'file'
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