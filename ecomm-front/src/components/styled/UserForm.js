import React from 'react'
import './css/userForm.scss'

import Button from './Button'
import Dropdown from './Dropdown'

const UserForm = (props) => {
    const { items, handleChangeFunction, handleSubmitFunction } = props
    const { data, buttonText } = items

    const selectField = (config) => {
        const { name, value, inputType, classname, defaultText, tagType, options } = config
        
        const fieldObj = {
            input: () => { return (<input value = {value} type = {inputType} className = {classname} onChange = {handleChangeFunction(name)} ></input>) },
            textarea: () => { return (<textarea value = {value} type={inputType} className = {classname} onChange = {handleChangeFunction(name)} ></textarea>) },
            dropdown: () => { return (<Dropdown handleChangeFn = {handleChangeFunction} data = {{name, value, options, classname, defaultText}}/>) },
            image: () => {return (<input type = "file" accept="image/*" className = {classname} onChange = {handleChangeFunction(name)} />)}
        }
        
        return fieldObj[tagType]()
    }

    const renderFields = () => {
        return data.map((item) => {
            const { label } = item

            return (
                 <div className="input-wrapper" key={label + "wrapper"}>
                    <span className="input-label" >{label}</span>
                    {selectField(item)}    
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