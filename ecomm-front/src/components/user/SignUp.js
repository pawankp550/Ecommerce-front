import React, { useState } from 'react'
import Layout from '../core/Layout'
import Button from '../styled/Button'
import { useHistory } from 'react-router-dom'
import './user.css'
import axios from 'axios'
import validator from 'validator'

//let history = useHistory()
let errorMessage = ''
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
            const user = await axios.post('https://obscure-wildwood-92689.herokuapp.com/api/signup', {
                name,
                email,
                password
            })
            setInputs({...inputs, error: false, name: '', email: '', password: '', success: true})
            //history.push('/signin')
        } catch (error) {
            setInputs({...inputs, error: error.response, success: false})
            errorMessage = error.response.data.error.message
        }
    }

    return (
        <Layout title= "SignUp Page" description="Sign up for Node React E-commerce App" className="container">
            <form className = 'signUp-form' onSubmit = {handleSubmit}>
                <input placeholder = 'Name' value = {inputs.name} className = 'user-name' onChange = {handleChange('name')}></input>
                <input placeholder = 'Email' value = {inputs.email} className = 'user-email' onChange = {handleChange('email')}></input>
                <input placeholder = 'Password' value = {inputs.password} className = 'user-password' type="password" onChange = {handleChange('password')}></input>
                <Button className = "submit-button">Submit</Button>
            </form>
            <span>{errorMessage}</span>
        </Layout>
    )
}

export default SignUp