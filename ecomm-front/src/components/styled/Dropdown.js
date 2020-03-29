import React, { useState } from "react";
import "./css/dropdown.scss";

const Dropdown = (props) => {
  const [ddstate, setddState] = useState({
    isOpen: false,
    selectedOptions: ''
  });

  const { handleChangeFn, data } = props

  const { name, value, options, classname, defaultText } = data
  
  const toggleOptions = () => {
    const { isOpen } = ddstate;

    if (!isOpen) {
      setddState({
        ...ddstate,
        isOpen: true
      });
    } else {
      setddState({
        ...ddstate,
        isOpen: false
      });
    }
  };

  const getSelectedOption = (e) => {
    e.preventDefault()
    setddState({
      ...ddstate,
      selectedOptions: e.target.name,
      isOpen: false
    });
    handleChangeFn(name)(e)
  };

  const renderOptions = () => {
    return options.map((item, i) => {
        const { value, name } = item
        return (
            <button onClick={getSelectedOption} value={value} name={name} key={name + i}>{name}</button>
        )
    })
  }

  return (
    <div className= {classname + ' dropdown'}>
      <div className="dropdown-selected" onClick={toggleOptions} tabindex="1">
        <span>{value === "" ? defaultText : ddstate.selectedOptions}</span>
      </div>
      <div
        className={
          ddstate.isOpen ? "dropdown-list dropdown-list-open" : "dropdown-list"
        }
      >
        <div className="dropdown-list-options">
          {renderOptions()}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
