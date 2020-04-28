import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import Loader from '../styled/Loader'

import { checkSignIn } from '../../auth'
import { getUserData } from './userAPI'

import UpdateFrom from './UpdateForm' 

import './css/profile.scss'

const Profile = () => {
    const { user } = checkSignIn() 
    const [userData, setUserData] = useState({
        name: '',
        email: ''
    })
    const [renderForm, setRenderForm] = useState(false)

    const init = async (token, userId) => {
        try {   
            setRenderForm(false)
            const response = await getUserData(token, userId)

            if(response.error) {
                return console.log(response.error)
            }
            setUserData(response.data)
            setRenderForm(true)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        init(user.token, user.publicProfile._id)
    }, [])

    return (
        <Layout>
            <div className="profile-form">
                { renderForm ? <UpdateFrom userData = {userData}/> : <Loader /> }
                
            </div>
        </Layout>
    )
}

export default Profile