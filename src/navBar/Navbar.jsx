import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import MenuBurger from "./menu/menuType/burger/MenuBurger";
import MenuPc from "./menu/menuType/menuPC/MenuPc";
import "./styleNavbar/Navbar.css";
import { REACT_APP_URLM } from "../constants/api.js";
import Footer from "../footer/Footer.jsx";

// import LogoName from "../img&icon/logo/HeadLogo.jpeg";
function Navbar() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  //useEffect - reading size windows
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <header className="main--header">
        <div className="logo--div">
          <img
            className="logo__div--imgLeft"
            src={`${REACT_APP_URLM}/img/logo/HeadLogo-left.jpg`}
            alt="logo"
          />
          <img
            className="logo__div--imgBetween"
            src={`${REACT_APP_URLM}/img/logo/HeadLogo-between.jpg`}
            alt="logo"
          />
          <img
            className="logo__div--imgCenter"
            src={`${REACT_APP_URLM}/img/logo/HeadLogo-center.jpg`}
            alt="logo"
          />
          <img
            className="logo__div--imgBetween"
            src={`${REACT_APP_URLM}/img/logo/HeadLogo-between.jpg`}
            alt="logo"
          />
          <img
            className="logo__div--imgRight"
            src={`${REACT_APP_URLM}/img/logo/HeadLogo-right.jpg`}
            alt="logo"
          />
        </div>

        <nav className="main__header--nav">
          {windowSize[0] > 853 ? <MenuPc /> : <MenuBurger />}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
