import React from 'react';
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";

import './app.css';

// core components
import Home from './core/Home';

// user components
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';
import Dashboard from '../components/user/Dashboard'



function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />   
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
