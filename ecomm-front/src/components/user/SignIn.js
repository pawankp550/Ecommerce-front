import React, { useState } from 'react'
import Layout from '../core/Layout'
import axios from 'axios'
import validator from 'validator'
import Button from '../styled/Button'

const SingIn = () => {
const [inputs, setInputs] = useState({
        email: '',
        password: '',
        error: '',
        shoudRedirect: false
    })

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
            const user = await axios.post('https://obscure-wildwood-92689.herokuapp.com/api/signin', {
                email,
                password
            })
            console.log(user)
        } catch (error) {
            setInputs({...inputs, error: true, success: false})
        }
    }

    return (
        <Layout title= "SignUp Page" description="Sign up for Node React E-commerce App" className="container">
            <form className = 'signUp-form' onSubmit = {handleSubmit}>
                <div className="input-wrapper">
                    <span>Email</span>    
                    <input value = {inputs.email} className = 'user-email' onChange = {handleChange('email')}></input>
                </div>
                <div className="input-wrapper"> 
                    <span>Password</span>     
                    <input value = {inputs.password} className = 'user-password' type="password" onChange = {handleChange('password')}></input>
                </div>    
                <Button className = "submit-button">Submit</Button>
            </form>
            {error? <span>Email or Password is wrong</span>: ''}
        </Layout>
    )
    
}

export default SingIn