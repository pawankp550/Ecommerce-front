import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './core/Home';
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';



function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signun" exact component={SignUp} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
