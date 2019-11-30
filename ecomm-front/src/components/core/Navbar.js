import React from 'react'
import { NavLink  } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
    <nav className="navbar">
        <ul className="link-wrapper">
            <li className="">
            <NavLink  className="" to="/" exact >Home</NavLink >
            </li>
            <li className="">
            <NavLink  className="" to="/signin" exact>Sign In</NavLink >
            </li>
            <li className="">
            <NavLink  className="" to="/signup" exact>Sign Up</NavLink >
            </li>
        </ul>
    </nav>
    )
}

export default Navbar