import React from 'react'
import { NavLink, Redirect  } from 'react-router-dom'
import './navbar.css'
import { signOut } from '../../auth'

import history from'../../history'

const Navbar = () => {
   
    const redirectOnSignOut = () => {
       window.location.replace('/')
    }

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
            <li className="">
                <span onClick = {() => signOut(redirectOnSignOut)}>
                    SignOut
                </span>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar