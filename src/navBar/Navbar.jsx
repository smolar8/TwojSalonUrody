import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import MenuBurger from "./menu/menuType/burger/MenuBurger";
import MenuPc from "./menu/menuType/menuPC/MenuPc";
import "./styleNavbar/Navbar.css";
import LogoFace from "../img&icon/logo/logo-face.png";
import LogoFeet from "../img&icon/logo/logo-feet.png";
import LogoName from "../img&icon/logo/logo-name.png";

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
    <header className="main--header">
      <div className="logo--div">
        <img className="logo__div--img" src={LogoFeet} alt="logo" />

        <img className="logo__div--img" src={LogoFace} alt="logo" />

        <img className="logo__div--img2" src={LogoName} alt="logo" />
      </div>
      <nav className="main__header--nav">
        {windowSize[0] > 853 ? <MenuPc /> : <MenuBurger />}
      </nav>
    </header>
  );
}

export default Navbar;
