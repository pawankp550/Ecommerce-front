import React from 'react'

import './css/button.scss'


let Button = (props) => {

    return (
    <button
        className={props.className + " primary-Button"}
        onClick={ props.handleClick }>
        <span>
            {props.children}
        </span>
    </button>
    )
}


export default Button