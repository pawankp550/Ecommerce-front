import React, { Component } from 'react'
import { route } from 'react-router-dom'
import { checkSignIn } from '../auth/index'
import {Route, Redirect} from 'react-router-dom'

const privateRoute = ({component: Component, ...rest}) => {
    <Route 
        {...rest}

        render = {props => 
            checkSignIn() ? <Component {...props}/> : <Redirect to = { { pathname: '/signin', state: { from: props.location } } } />
        }
    
    />
}