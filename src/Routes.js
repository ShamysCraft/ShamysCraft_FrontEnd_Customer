import React from 'react'
import { Route, Switch } from 'react-router-dom'
//import all the pages
//common

import HomePage from "./core/HomePage"

//user
import SignUp from "./user/signUp"
import LoginPage from "./user/SignIn"
import ViewItemPage from "./user/ViewItemPage"
import ProfilePage from "./user/ProfilePage"
import HelpPage from "./user/HelpPage"
import CartPage from "./user/CartPage"
import CheckoutPage from "./user/CheckoutPage"
import OrderHistory from './user/OrderHistory';
function Routes() {
    return (
        <div>
             <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                
                <Route exact path="/cart">
                  <CartPage />
                </Route>
                <Route path="/profile">
                  <ProfilePage />
                </Route>
                <Route path="/help">
                  <HelpPage />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/signin">
                  <LoginPage />
                </Route>
                {/* <Route path="/itemPage">
                  <ViewItemPage />
                </Route> */}
                <Route path="/orderHistory">
                  <OrderHistory />
                </Route>
                <Route path="/checkOut">
                  <CheckoutPage />
                </Route>
              </Switch>
           
        </div>
    )
}

export default Routes
