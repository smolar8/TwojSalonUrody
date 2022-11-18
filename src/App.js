import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navBar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";
import TextHeader from "./textHeader/TextHeader";
import PhotoTeam from "./photoTeam/PhotoTeam";

function App() {
  return (
    <Router>
      <div className="logo--div">
        <p className="logo__div--img">LOGO</p>
        <img src=" " alt="" />
      </div>
      <div className="nav--div">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/payments" component={Contact} />
        <Route path="/contact" component={AboutUs} />
      </Switch>
      <TextHeader />
      <PhotoTeam />
      <Footer />
    </Router>
  );
}

export default App;
