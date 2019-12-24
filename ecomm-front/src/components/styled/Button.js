import React from 'react'

import './button.css'


let Button = (props) => {
    let buttonStyle = {
    margin: '10px',
    border: 'none',
    }

    return (
    <button
        className={props.className}
        style={buttonStyle}
        onClick={props.handleClick}>
        <span>
            {props.children}
        </span>
    </button>
    )
}


export default Button