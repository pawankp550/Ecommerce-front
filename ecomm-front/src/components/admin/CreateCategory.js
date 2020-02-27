import React, {useState} from 'react';
import Layout from '../core/Layout';
import UserForm from '../styled/UserForm';
import Validation from '../styled/Validation';

import { checkSignIn } from '../../auth';
import { createCategory } from './adminAPI';

const CreateCategory = () => {
    const { user } = checkSignIn()

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const itemsToRender = {
            data: [{
            label: "Category Name",
            name: "name",
            inputType: "text",
            value: name,
            classname: "category-name",
            tagType: 'input'
        }],
        buttonText: 'Create'
    }

    const handleChange = (name) => (e) => {
        setName(e.target.value)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await createCategory(name, user.token)
        if (!response.error) {
            setSuccess(true)
            setError(false)
        } else {
            setSuccess(false)
            setError(response.error.response.data.message)
        }
    }

    return (
         <Layout title= "" description="Create Category" className="container">
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

export default CreateCategory