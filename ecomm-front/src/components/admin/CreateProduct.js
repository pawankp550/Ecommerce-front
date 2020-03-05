import React, {useState, useEffect} from 'react';
import Layout from '../core/Layout';
import UserForm from '../styled/UserForm';
import { createProduct, getCategories } from '../admin/adminAPI';
import { checkSignIn } from '../../auth';
import Loader from '../styled/Loader';
import Validation from '../styled/Validation';

const CreateProduct = () => {
    const { user } = checkSignIn()
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        quantity: '',
        shipping: '',
        imageData: null,
        error: false,
        success: false,
        loading: false,
        categoryData: [],
        formData: ''
    })

    const init = async () => {
        const response = await getCategories()
        const categoryData = response.data.map(item => {
            const { _id, name} = item
            return {value: _id, name}
        })
        setValues({ ...values, categoryData, formData: new FormData() });
    }

    useEffect(() => {
        init()
    }, []);
    
    const { name, description, price, category, quantity, shipping, imageData, error, success, formData, categoryData } = values

    const errorColor = (name, color, otherColor) => {
    let ele = document.querySelector(`.product-${name}`)
    let hasClass = ele.classList.contains(color)
    let hasOtherClass = ele.classList.contains(otherColor)

    if(!hasClass) {
        if(hasOtherClass) {
            ele.classList.remove(otherColor)
        }
        ele.classList.add(color)
    }
}

    const handleChange = (name) => (e) => {
        e.persist()
        
        const value = /imageData/i.test(name) ? e.target.files[0] : e.target.value

        formData.set(name, value)
        setValues({
               ...values,
               [name] : value  
            })

        if(name === 'name') {
            if(value.length === 0 || value === '' || value === ' ') {
                errorColor(name, 'error', 'no-error')
            } else {
                errorColor(name, 'no-error', 'error')
            }
        }

        if(name === 'description') {
            if(value.length < 20 || value === '' || value === ' ') {
                errorColor(name, 'error', 'no-error')
            } else {
                errorColor(name, 'no-error', 'error')
            }
        }

        if(name === 'price') {
            if(value <= 0 || value === '' || value === ' ') {
                errorColor(name, 'error', 'no-error')
            } else {
                errorColor(name, 'no-error', 'error')
            }
        }

        if(name === 'quantity') {
            if(value <= 0 || value === '' || value === ' ') {
                errorColor(name, 'error', 'no-error')
            } else {
                errorColor(name, 'no-error', 'error')
            }
        }

        if(name === 'category') {
            if(value.length === 0 || value === '' || value === ' ') {
                errorColor(name, 'error', 'no-error')
            } else {
                errorColor(name, 'no-error', 'error')
            }
        }

        if(name === 'shipping') {
            if(value.length === 0 || value === '' || value === ' ') {
                errorColor(name, 'error', 'no-error')
            } else {
                errorColor(name, 'no-error', 'error')
            }
        }

        if(name === 'imageData') {
            if(!value) {
                errorColor(name, 'error', 'no-error')
            } else {
                errorColor(name, 'no-error', 'error')
            }
        }
    }

    const handleSubmit = async (e) => {
         setValues({
               ...values,
               loading : true  
            })

        e.preventDefault()
        const response = await createProduct(formData, user.token)
  
        setValues({
               ...values,
               loading : false  
            })

        if (response.error) {
            setValues({
               ...values,
               error : response.error.message,
               success : false  
            })
        } else {
             setValues({
                ...values,
                success : true,
                error : false,
                name: '',
                description: '',
                price: '',
                category: '',
                quantity: '',
                shipping: '',
                imageData: null,
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
            options: categoryData
        },
        {
            label: "Shipping",
            name: "shipping",
            value: shipping,
            classname: "product-shipping",
            tagType: 'dropdown',
            options: [{value: 'true', name: 'true'}, {value: 'false', name: 'false'}]
        },
        {
            label: "Images",
            name: "imageData",
            value: imageData,
            classname: "product-imageData",
            tagType: 'image',
            inputType: 'file'
        }
    ],
        buttonText: 'Submit'}
    
    return (
         <Layout title= "" description="Create Product" className="container">
            {values.loading ? <Loader /> : ''}
            {error ? <Validation data = {{type: 'error', text: error}} /> : ''}
            {success ? <Validation data = {{type: 'success', text: 'Success!'}} /> : ''}
           <UserForm 
                items = {itemsToRender}
                handleChangeFunction = {handleChange}
                handleSubmitFunction = {handleSubmit}
           />
        </Layout>    
    )
}

export default CreateProduct