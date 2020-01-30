import React from 'react'
import { checkSignIn } from './index'
import {Route, Redirect} from 'react-router-dom'

const AdminRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        
        render = {(props) => { 
            const { isloggedIn, user } = checkSignIn()
            const isAuthenticated = isloggedIn && (user.publicProfile.role === 1)
            return isAuthenticated ? <Component {...props}/> : <Redirect to = { { pathname: '/signin', state: { from: props.location } } } />
        }
    }
    />
    )}

export default AdminRoute