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
function Routes() {
    return (
        <div>
             <Switch>
                <Route exact path="/" component={HomePage}/>
                
                <Route  path="/cart" component={CartPage}/>
                 
                <Route path="/profile" component={ProfilePage}/>
                
                <Route path="/help" component={HelpPage}/>
                
                <Route path="/signup" component={SignUp}/>
                
                <Route path="/signin" component={LoginPage}/>
                
                <Route path="/orderHistory" component={OrderHistory}/>
                
                <Route path="/checkOut" component={CheckoutPage}/>
                
              </Switch>
           
        </div>
    )
}

export default Routes
