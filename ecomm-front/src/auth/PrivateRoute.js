import React, { Component } from 'react'
import { route } from 'react-router-dom'
import { checkSignIn } from './index'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (<Route 
        {...rest}

        render = {props => 
            checkSignIn().isloggedIn ? <Component {...props}/> : <Redirect to = { { pathname: '/signin', state: { from: props.location } } } />
        }
    
    />)
}

export default PrivateRoute