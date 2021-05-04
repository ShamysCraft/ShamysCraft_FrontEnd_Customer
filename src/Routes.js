import React from 'react'
import { Route, Switch } from 'react-router-dom'
//import all the pages
//common

import HomePage from "./core/HomePage"

//user
import SignUp from "./user/signUp"
import LoginPage from "./user/SignIn"
import ProfilePage from "./user/ProfilePage"
import HelpPage from "./user/HelpPage"
import CartPage from "./user/CartPage"
import CheckoutPage from "./user/CheckoutPage"
import OrderHistory from './user/OrderHistory';
import UserDashboard from './user/UserDashBoard';
import Errorpage from './user/ErrorPage';

// import private routes
import PrivateRoute from "./auth/helper/PrivateRoutes"
//import admin routes
import AdminRoute from "./auth/helper/AdminRoutes"


function Routes() {
    return (
        <div>
             <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/error" component={Errorpage}/>

                <PrivateRoute exact path="/user/dashboard" component={UserDashboard}/>
                
                <PrivateRoute  path="/cart" component={CartPage}/>
                 
                <PrivateRoute path="/profile" component={ProfilePage}/>
                
                <Route path="/help" component={HelpPage}/>
                
                <Route path="/signup" component={SignUp}/>
                
                <Route path="/signin" component={LoginPage}/>
                
                <PrivateRoute path="/orderHistory" component={OrderHistory}/>
                
                <PrivateRoute path="/checkOut" component={CheckoutPage}/>

                {/* <AdminRoute path="/profile" component={ProfilePage}/>
                <AdminRoute  path="/cart" component={CartPage}/> */}

                
              </Switch>
           
        </div>
    )
}

export default Routes
