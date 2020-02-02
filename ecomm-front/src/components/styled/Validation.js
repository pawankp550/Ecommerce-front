import React from 'react'
import './css/validation.scss'

const Validation = (props) => {
    const { text, type } = props.data

    const renderMessage = () => {
        return <div className = {"form-validation-container form-" + type}><span>{text}</span></div>
    }

    return (
        renderMessage()
    )
}

export default Validation