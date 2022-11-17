import React, { useEffect, useState } from "react";

import MenuBurger from "./menu/menuType/burger/MenuBurger";
import MenuPc from "./menu/menuType/menuPC/MenuPc";
import "./styleNavbar/Navbar.css";

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
      <nav className="main__header--nav">{windowSize > 768 ? <MenuPc /> : <MenuBurger />}</nav>
    </header>
  );
}

export default Navbar;
