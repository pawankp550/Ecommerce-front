import React, { useState } from 'react';
import './css/plpCheckbox.scss';


const PlpCheckbox = (props) => {
    const { data, title, handleFilters } = props

    const [optionsSelected, setOptionsSelected] = useState([])

    const onCheckboxChanged = (e) => {
        e.persist()
        const options = optionsSelected
         if (e.target.checked) {
            options.push(e.target.value)
            setOptionsSelected(options)
        } else {
        let index = options.indexOf(e.target.value)
        options.splice(index, 1)
        setOptionsSelected(options)
        }

        handleFilters(optionsSelected)
    }

    const getList = () => {
        return data.map((item, i) => {
            return (
                <li key={i}>
			        <input className="styled-plp-checkbox" id={item._id} type="checkbox" value={item._id} />
			        <label htmlFor={item._id}>{item.name}</label>
		        </li>
            )
        })
    }

    return (
        <div className="plp-checkbox">
            <div className="plp-checkbox-title"><span>{title}</span></div>
            <ul className="" onChange={onCheckboxChanged}>
                {getList()}
            </ul>
        </div>
    )
}

export default PlpCheckbox