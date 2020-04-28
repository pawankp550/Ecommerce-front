import React from 'react'

import './css/button.scss'


let Button = (props) => {
    const { type = '', className, handleClick } = props
    return (
    <button
        type = {type}
        className={className + " primary-Button"}
        onClick={ handleClick }>
        <span>
            {props.children}
        </span>
    </button>
    )
}


export default Button