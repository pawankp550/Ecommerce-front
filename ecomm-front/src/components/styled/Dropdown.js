import React, { useState } from "react";
import "./css/dropdown.scss";

const Dropdown = (props) => {
  const [ddstate, setddState] = useState({
    isOpen: false
  });

  const { handleChangeFn, data } = props

  const { name, value } = data

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
      isOpen: false
    });
    handleChangeFn(name)(e)
  };

  return (
    <div className="dropdown">
      <div className="dropdown-selected" onClick={toggleOptions}>
        <span>{value === "" ? "Select" : value}</span>
      </div>
      <div
        className={
          ddstate.isOpen ? "dropdown-list dropdown-list-open" : "dropdown-list"
        }
      >
        <div className="dropdown-list-options">
          <button onClick={getSelectedOption} value="vv">vv</button>
          <button onClick={getSelectedOption} value="honda">honda</button>
          <button onClick={getSelectedOption} value="panigale">panigale</button>
          <button onClick={getSelectedOption} value="cbr">cbr</button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
