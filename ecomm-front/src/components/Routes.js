import React from 'react';
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";

import './app.css';

// core components
import Home from './core/Home';

// user components
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';



function Routes() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Home} />   
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
    </BrowserRouter>
  );
}

export default Routes;
