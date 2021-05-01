import './App.css';
import Routes from "./Routes"

//import all the common components
import Header from "./core/components/Header/Header"
import Footer from "./core/components/Footer/Footer"
import SideNavBar from "./core/components/SideNavBar/SideNavBar"

function App() {
  return (

    <div className="App">
      <div className="header"><Header /></div>
      <div className="BodyContainer">
        {/* left side navbar */}
        <div className="sideNavBar"><SideNavBar /></div>
        {/* body content */}
        <div className="content">
          <div className="body"><Routes /></div>
          <div className="Footer"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
