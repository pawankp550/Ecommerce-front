import React, { useState } from 'react'
import Layout from '../core/Layout'

import axios from 'axios'

const SignUp = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const handleChange = name => e => {
        //e.persist()
        setInputs({...inputs, error: false, [name]: e.target.value})
        console.log(inputs)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password } = inputs
        try{
            const user = await axios.post('https://3000-b4ea6a1c-4b14-4c98-bd3f-33c3c28bd6fc.ws-ap0.gitpod.io/api/signup', {
                name,
                email,
                password
            })
            setInputs({...inputs, error: false, name: '', email: '', password: '', success: true})
            console.log(user)
        } catch (error) {
            setInputs({...inputs, error: error.response, success: false})
            console.log(error.response)
        }
    }

    return (
        <Layout title= "SignUp Page" description="Sign up for Node React E-commerce App" className="container">
            <form onSubmit = {handleSubmit}>
                <input onChange = {handleChange('name')}></input>
                <input onChange = {handleChange('email')}></input>
                <input onChange = {handleChange('password')}></input>
                <button>Submit</button>
            </form>
            <span>{inputs.name}</span>
        </Layout>
    )
}

export default SignUp