import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import {COLOURS} from "./theme/colors"
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import theme from "./theme/theme"
//import all the pages
//common
import SignUpLoginPage from "./containers_webPages/User_Seller/signUp_LoginPage"
import HomePage from "./containers_webPages/User_Seller/HomePage"

//user
import ViewItemPage from "./containers_webPages/User_Seller/ViewItemPage"
import ProfilePage from "./containers_webPages/User_Seller/ProfilePage"
import HelpPage from "./containers_webPages/User_Seller/HelpPage"
import CartPage from "./containers_webPages/User_Seller/CartPage"
import CheckoutPage from "./containers_webPages/User_Seller/CheckoutPage"
import OrderHistoryPage from "./containers_webPages/User_Seller/OrderHistory"
//seller
import BecomeSellerPage from "./containers_webPages/seller/BecomeSellerPage"
import CreateShopPage from "./containers_webPages/seller/CreateShopPage"
import ShopPage from "./containers_webPages/seller/ShopPage"
import SalesPage from "./containers_webPages/seller/ShopSalesPage"
import AddItemPage from "./containers_webPages/seller/AddItemPage"
import PendingOrderPage from "./containers_webPages/seller/PendingOrderPage"
import ConfirmOrderPage from "./containers_webPages/seller/ConfirmedOrderPage"

//import all the common components
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import SideNavBar from "./components/SideNavBar/SideNavBar"
import RightNav from "./components/RightNavBar/RightNavBar"
import Body from "./components/Body/Body"

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{backgroundColor: COLOURS.darkWhite}}>
      <Header/>
      <div></div>
        <div className="container">
        </div>
        <div className="BodyContainer">
           <div className="sideNavBar">
               <SideNavBar/>
            </div> 
            
           <div className="content">
             <Body>
           <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/becomeSeller">
              <BecomeSellerPage/>
            </Route>
            <Route exact path="/cart">
              <CartPage/>
            </Route>
            <Route path="/profile">
              <ProfilePage/>
            </Route>
            <Route path="/help">
              <HelpPage/>
            </Route>S
            <Route path="/signinup">
              <SignUpLoginPage />
            </Route>
            <Route path="/shopSales">
              <SalesPage/>
            </Route>
            <Route path="/itemPage">
              <ViewItemPage/>
            </Route>
          </Switch>
          </Body>
            </div> 

           <div className="rightNavBar">
               <RightNav/>
            </div> 
        </div>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;