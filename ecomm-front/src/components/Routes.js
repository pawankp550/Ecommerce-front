import React from 'react';
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";
import AdminRoute from "../auth/AdminRoute";

import './app.scss';

// core components
import Home from './core/Home';

// user components
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';
import Dashboard from '../components/user/Dashboard'
import AdminDashboard from '../components/user/AdminDashboard'

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />   
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
