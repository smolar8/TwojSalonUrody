import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navBar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <div className="logo--div">
        <p>LOGO</p>
        <img src=" " alt="" />
      </div>
      <div className="nav--div">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/payments" component={Contact} />
        <Route path="/contact" component={Home} />
      </Switch>
      <div className="socials">
        <div className="socials--div">
          <div className="fb">
            <i className="icon-facebook"></i>
          </div>
          <div className="yt">
            <i className="icon-youtube"></i>
          </div>
          <div className="tw">
            <i className="icon-twitter"></i>
          </div>
          <div className="gplus">
            <i className="icon-googleplus"></i>
          </div>
          {/* <div style={clear:both}></div> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
