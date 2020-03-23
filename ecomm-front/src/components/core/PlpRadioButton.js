import React, { useState } from 'react';
import './css/plpRadioButton.scss';

const PlpRadioButton = (props) => {
    const { data, title, handleFilters, name } = props

    const [optionsSelected, setOptionsSelected] = useState(0)

    const onradiobuttonChanged = (e) => {
        e.persist()
        
        if (e.target.checked) {
            setOptionsSelected(e.target.value)
        } 

        handleFilters(e.target.value)
    }

    const getList = () => {
        return data.map((item, i) => {
            return (
                <li key={i}>
			        <input className="styled-plp-radiobutton" id={item._id} name = {name} type="radio" value={item._id} />
			        <label htmlFor={item._id}>&#8377; [{item.name}]</label>
		        </li>
            )
        })
    }

    return (
        <div className="plp-radiobutton">
            <div className="plp-radiobutton-title"><span>{title}</span></div>
            <ul className="" onChange={onradiobuttonChanged}>
                {getList()}
            </ul>
        </div>
    )
}

export default PlpRadioButton