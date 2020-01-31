import React from 'react'
import './css/userForm.scss'

import Button from './Button'

const UserForm = (props) => {
    const { items, handleChangeFunction, handleSubmitFunction } = props
    const { data, buttonText } = items

    const renderFields = () => {
        return data.map(item => {
            const { label, name, value, inputType, classname } = item
            return (
                 <div className="input-wrapper">
                    <span>{label}</span>    
                    <input value = {value} type={inputType} className = {classname} onChange = {handleChangeFunction(name)}></input>
                </div>
            )
        })
      
    }


    return (
        <form className = 'form' onSubmit = {handleSubmitFunction}>
            {renderFields()}
            <Button className = "submit-button">{buttonText}</Button>
        </form>    
        )

}

export default UserForm