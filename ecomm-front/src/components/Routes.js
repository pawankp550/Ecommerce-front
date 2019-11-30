import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './app.css';

// core components
import Home from './core/Home';
import Navbar from './core/Navbar';

// user components
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';



function Routes() {
  return (
    <BrowserRouter>
            <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
