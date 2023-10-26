import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navBar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";

import Podologia from "./components/podologia/Podologia";

import Oferta from "./components/oferta/Oferta";
import Promocja from "./components/promocja/Promocja";
import Stylizacja from "./components/stylizacja/Stylizacja";
import Masaz from "./components/masaz/Masaz";

function App() {
  return (
    <Router>
      <div className="nav--div">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/oferta" component={Oferta} />
        <Route path="/podologia" component={Podologia} />
        <Route path="/promocja" component={Promocja} />
        <Route path="/contact" component={Contact} />
        <Route path="/stylizacja" component={Stylizacja} />
        <Route path="/masaz" component={Masaz} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
