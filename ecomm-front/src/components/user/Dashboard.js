import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import List from '../styled/List'
import Orderlist from './Orderslist'

import './css/dashboard.scss'

import { checkSignIn } from '../../auth'
import { NavLink } from 'react-router-dom'


const Dashboard = () => {
    const { user } = checkSignIn()

    const { name, email, role, _id } = user.publicProfile

    const userInfo = {
        title: 'User Information',
        data: { name , email, role: role === 0 ? 'Registered User' :  'Admin' } 
    }

    const userLinks = {
        title: 'User Links',
        data: {
            myCart: <NavLink to="/cart">My Cart</NavLink>,
            updateDetails: <NavLink to={`/profile/${_id}`}>Update Profile</NavLink>
        }
    }

    return (
        <Layout title= "Dashboard Page" description={`G'day ${name}`} className="container">
            <div className = "dashboard-lists" >
                <div className="dashboard-lists-left">
                    <List details = {userLinks}/>
                </div>
                <div className="dashboard-lists-right">
                    <List details = {userInfo}/>
                </div>
            </div>
            <Orderlist user = {user}/>
        </Layout>
    )

}

export default Dashboard