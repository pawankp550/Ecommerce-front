import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import List from '../styled/List'

import './user.scss'

import { checkSignIn } from '../../auth'
import { NavLink } from 'react-router-dom'


const Dashboard = () => {
    const { user } = checkSignIn()

    const { name, email, role } = user.publicProfile

    const details1 = {
        title: 'User Information',
        data: { name , email, role: role === 0 ? 'Registered User' :  'Admin' } 
    }

    const details2 = {
        title: 'Purchase History',
        data: { history: 'history' } 
    }

    const userLinks = {
        title: 'User Links',
        data: {
            myCart: <NavLink to="/cart">My Cart</NavLink>,
            updateDetails: <NavLink to="/profile/update">Update Profile</NavLink>
        }
    }

    return (
        <Layout title= "Dashboard Page" description={`G'day ${name}`} className="container">
            <div className = "dashboard-lists" >
                <div className="dashboard-lists-left">
                    <List details = {userLinks}/>
                </div>
                <div className="dashboard-lists-right">
                    <List details = {details1}/>
                    <List details = {details2}/>
                </div>
            </div>
        </Layout>
    )

}

export default Dashboard