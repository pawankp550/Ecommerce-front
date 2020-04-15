import React from 'react'
import { NavLink, Redirect  } from 'react-router-dom'
import './css/navbar.scss'
import { signOut, checkSignIn } from '../../auth'
import { useSelector } from 'react-redux'

import history from'../../history'

const Navbar = () => {
    const { isloggedIn, user } = checkSignIn()
    const cartState = useSelector(state => state.cartState)

    const redirectOnSignOut = () => {
       window.location.replace('/')
    }

    const renderLogOption = () => {
        if (isloggedIn) {
            return (
                <>
                    <li className="navbar-button-signout">
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

    const renderDasboardLink = () => {
        if (isloggedIn) {
            return user.publicProfile.role === 1 ? <NavLink  className="" to="/admin/dashboard" exact >Dashboard</NavLink > :  <NavLink  className="" to="/user/dashboard" exact >Dashboard</NavLink >
        }
    }

    return (
    <nav className="navbar">
        <ul className="link-wrapper">
            <li className="">
                <NavLink  className="" to="/" exact >Home</NavLink >
            </li>
            <li className="">
                <NavLink  className="" to="/shop" exact >Shop</NavLink >
            </li>
            <li className="">
                {renderDasboardLink()}
            </li>
            {renderLogOption()}
            <li>
                <NavLink  className="navbar-cart-link" to="/cart" exact >cart({cartState.length})</NavLink >
            </li>
        </ul>
    </nav>
    )
}

export default Navbar