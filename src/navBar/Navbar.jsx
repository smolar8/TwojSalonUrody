import React, { useEffect, useState } from "react";

import MenuBurger from "./menu/menuType/burger/MenuBurger";
import MenuPc from "./menu/menuType/menuPC/MenuPc";
import "./styleNavbar/Navbar.css";
import LogoImg from "../img&icon/logo.png";

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
    <header className="main-header">
      <div className="logo--div">
        <img className="logo__div--img" src={LogoImg} alt="logo" />
        <img className="logo__div--img2" src={LogoImg} alt="logo" />
      </div>
      <nav className="main__header--nav">
        {windowSize > 768 ? <MenuPc /> : <MenuBurger />}
      </nav>
    </header>
  );
}

export default Navbar;
