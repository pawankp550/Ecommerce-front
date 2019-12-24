import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import axios from 'axios'
import validator from 'validator'
import { Redirect } from "react-router-dom"
import { URL } from '../../config'

import UserForm from '../styled/UserForm'

import { authenticate } from '../../auth'

const SingIn = () => {
const [inputs, setInputs] = useState({
        email: '',
        password: '',
        error: false,
        shoudRedirect: false
    })

useEffect(() => {}, [inputs])

const { email, password, error, shoudRedirect } = inputs    

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
        if(name === 'email') {
            if(!validator.isEmail(value)) {
                errorColor(name, 'error', 'no-error')
            } else {
                 errorColor(name, 'no-error', 'error')
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = inputs
        try{
            const user = await axios.post(`${URL}signin`, {
                email,
                password
            })
            
            authenticate(user.data, () => {
                setInputs({...inputs, shoudRedirect:true})
            })

        } catch (error) {
            setInputs({...inputs, error: 'Email or Password is wrong', success: false})
        }
    }

    const redirectToHome = () => {
        if (shoudRedirect) {
            return <Redirect to="/" />
        }
    }

    const itemsToRender = [{
        label: "Email",
        name: "email",
        inputType: "email",
        value: inputs.email,
        classname: "user-email",
    },
    {
        label: "Password",
        name: "password",
        value: inputs.password,
        inputType: "password",
        classname: "user-password",
    }]

    return (
        <Layout title= "SignUp Page" description="Sign in for Node React E-commerce App" className="container">
            <UserForm 
                items = {itemsToRender}
                handleChangeFunction = {handleChange}
                handleSubmitFunction = {handleSubmit}
            />  
            {error? <span>{error}</span>: ''}
            {redirectToHome()}
        </Layout>
    )
    
}

export default SingIn