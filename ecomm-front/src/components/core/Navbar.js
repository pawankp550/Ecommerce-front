import React from 'react'
import { NavLink  } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink  className="nav-link" to="/" exact >Home</NavLink >
            </li>
            <li className="nav-item">
            <NavLink  className="nav-link" to="/signin" exact>Sign In</NavLink >
            </li>
            <li className="nav-item">
            <NavLink  className="nav-link" to="/signup" exact>Sign Up</NavLink >
            </li>
        </ul>
    </nav>
    )
}

export default Navbar