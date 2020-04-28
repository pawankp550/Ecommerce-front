import React from 'react'
import { useFormik } from 'formik'
import Button from '../styled/Button'

const UpdateForm = (props) => {
    const { userData } = props

    const initialValues = {
        name: userData.name,
        email: userData.email,
        password: ''
    }
    
    const onSubmit = values => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues,
        onSubmit
    })

    return (
        <div className="form-container">
            <form onSubmit={formik.handleSubmit} className="form">
                <div className="form-field input-wrapper">
                    <label htmlFor="name" className="input-label">First Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <div className="form-field input-wrapper">
                    <label htmlFor="email" className="input-label">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className="form-field input-wrapper">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />  
                </div>
                <Button className="form-update-details" type="submit"> Update </Button>
            </form>
        </div>
    )
}

export default UpdateForm