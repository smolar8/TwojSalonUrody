import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navBar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/contakt/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/payments" component={Contact} />
        <Route path="/contact" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
