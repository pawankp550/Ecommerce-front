import React from 'react';
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";
import AdminRoute from "../auth/AdminRoute";

import './app.scss';

// core components
import Home from './core/Home';
import ProductsListing from './core/ProductsListing';
import ProductPage from '../components/core/ProductPage'
import Cart from '../components/core/Cart'

// user components
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';
import Dashboard from '../components/user/Dashboard';

// admin components
import AdminDashboard from '../components/user/AdminDashboard';
import CreateCategory from '../components/admin/CreateCategory';
import CreateProduct from '../components/admin/CreateProduct';
import Orders from '../components/admin/Orders';

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />  
            <Route path="/shop" exact component={ProductsListing}/>
            <Route path="/product/:id" exact component={ProductPage}/>
            <Route path="/cart" exact component={Cart}/>
 
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />

            <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
            <AdminRoute path="/create/category" exact component={CreateCategory}/>
            <AdminRoute path="/create/product" exact component={CreateProduct}/>
            <AdminRoute path="/admin/order" exact component={Orders}/>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
