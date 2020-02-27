import React, { useState } from 'react'
import Layout from '../core/Layout'
import Button from '../styled/Button'
import { useHistory } from 'react-router-dom'

import axios from 'axios'
import validator from 'validator'
import { URL } from '../../config'

import UserForm from '../styled/UserForm'
import Validation from '../styled/Validation'

//let history = useHistory()
const SignUp = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

const errorColor = (name, color, otherColor) => {
    let ele = document.querySelector(`.user-${name}`)
    let hasClass = ele.classList.contains(color)
    let hasOtherClass = ele.classList.contains(otherColor)

    if(!hasClass) {
        if(hasOtherClass) {
            ele.classList.remove(otherColor)
        }
        ele.classList.add(color)
    }
}

const handleChange = name => e => {
        const value = e.target.value
        setInputs({...inputs, error: false, [name]: value})

        if(name === 'name') {
            if(value.length < 4 || value === '' || value === ' ') {
                errorColor(name, 'error', 'no-error')
            } else {
                errorColor(name, 'no-error', 'error')
            }
        }

        if(name === 'email') {
            if(!validator.isEmail(value)) {
                errorColor(name, 'error', 'no-error')
            } else {
                 errorColor(name, 'no-error', 'error')
            }
        }

         if(name === 'password') {
            if((value.length < 7) || (value.toLowerCase().indexOf('password') !== -1)) {
                errorColor(name, 'error', 'no-error')
            } else {
                 errorColor(name, 'no-error', 'error')
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password } = inputs
        try{
            const user = await axios.post(`${URL}signup`, {
                name,
                email,
                password
            })
            setInputs({...inputs, error: false, name: '', email: '', password: '', success: true})
            //history.push('/signin')
        } catch (error) {
            setInputs({...inputs, error: error.response.data.error.message, success: false})
        }
    }

    const itemsToRender = {
        data : [{
        label: "Name",
        name: "name",
        value: inputs.name,
        inputType: "text",
        classname: "user-name",
        tagType: 'input'
    },
    {
        label: "Email",
        name: "email",
        inputType: "email",
        value: inputs.email,
        classname: "user-email",
        tagType: 'input'
    },
    {
        label: "Password",
        name: "password",
        inputType: "password",
        value: inputs.password,
        classname: "user-password",
        tagType: 'input'
    }],
    buttonText: 'Submit'
}

    return (
        <Layout title= "SignUp Page" description="Sign up for Node React E-commerce App" className="container">
        {inputs.error? <Validation data = {{ text: inputs.error, type: 'error' }}/> : ''}
            < UserForm 
                items = {itemsToRender}
                handleChangeFunction = {handleChange}
                handleSubmitFunction = {handleSubmit}
            />
        </Layout>
    )
}

export default SignUp