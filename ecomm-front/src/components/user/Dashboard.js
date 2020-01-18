import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import { checkSignIn } from '../../auth'

const Dashboard = () => {
    const { user } = checkSignIn()
    const { name, email, role } = user.publicProfile
    return (
        <Layout title= "Dashboard Page" description="Node React E-commerce App" className="container">
            <div>
                <span>{name}</span>
                <span>{email}</span>
                <span>{role}</span>
            </div>
        </Layout>
    )

}

export default Dashboard