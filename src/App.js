import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MessengerCustomerChat from "react-messenger-customer-chat";
import "./App.css";
import Navbar from "./navBar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";

import Payments from "./components/payments/Payments";
import CallNumber from "./components/aboutUs/call/Call";
import Oferta from "./components/oferta/Oferta";

function App() {
  return (
    <Router>
      <div className="nav--div">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/oferta" component={Oferta} />
        <Route path="/payments" component={Payments} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <CallNumber /> 
      {/* <MessengerCustomerChat
        pageId="100063662436688" //<m.me/369123463255309 messenger ID>"
        //https://www.facebook.com/profile.php?id=100063662436688
        appId="<pobrać z facebook Developer>"
      /> */}
      <Footer />
    </Router>
  );
}

export default App;
