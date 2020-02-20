import React from 'react'

import './css/button.scss'


let Button = (props) => {
    let buttonStyle = {
    margin: '10px',
    border: 'none',
    }

    return (
    <button
        className={props.className + " primary-Button"}
        style={buttonStyle}
        onClick={props.handleClick}>
        <span>
            {props.children}
        </span>
    </button>
    )
}


export default Button