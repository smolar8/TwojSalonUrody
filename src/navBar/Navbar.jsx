import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import MenuBurger from "./menu/menuType/burger/MenuBurger";
import MenuPc from "./menu/menuType/menuPC/MenuPc";
import "./styleNavbar/Navbar.css";
import LogoFace from "../img&icon/logo/logo-face.png";
import LogoFeet from "../img&icon/logo/logo-feet.png";
import LogoName from "../img&icon/logo/logo-name.png";

function Navbar() {
  const [windowSize, setWindowSize] = useState({ width: undefined });
  //useEffect - reading size windows
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="main--header">
      <div className="logo--div">
        <img className="logo__div--img" src={LogoFeet} alt="logo" />

        <img className="logo__div--img" src={LogoFace} alt="logo" />

        <img className="logo__div--img2" src={LogoName} alt="logo" />
      </div>
      <nav className="main__header--nav">
        {windowSize > 853 ? <MenuPc /> : <MenuBurger />}
      </nav>
    </header>
  );
}

export default Navbar;
