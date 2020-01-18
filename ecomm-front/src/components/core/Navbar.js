import React from 'react'
import { NavLink, Redirect  } from 'react-router-dom'
import './navbar.css'
import { signOut, checkSignIn } from '../../auth'

import history from'../../history'

const Navbar = () => {
   const { isloggedIn, user } = checkSignIn()
    const redirectOnSignOut = () => {
       window.location.replace('/')
    }

    const renderLogOption = () => {
        if (isloggedIn) {
            return (
                <>
                    <li className="">
                        <span onClick = {() => signOut(redirectOnSignOut)}>
                            SignOut
                        </span>
                    </li>
                </>                    
            )
        } else {
            return (
                <>
                    <li className="">
                        <NavLink  className="" to="/signin" exact>Sign In</NavLink >
                    </li>
                    <li className="">
                        <NavLink  className="" to="/signup" exact>Sign Up</NavLink >
                    </li>
                </>
            )
        }
    }

    return (
    <nav className="navbar">
        <ul className="link-wrapper">
            <li className="">
            <NavLink  className="" to="/" exact >Home</NavLink >
            </li>
            {renderLogOption()}
            <li className="">
            <NavLink  className="" to="/user/dashboard" exact >Dashboard</NavLink >
            </li>
        </ul>
    </nav>
    )
}

export default Navbar