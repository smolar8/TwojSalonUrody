import React, { useEffect, useState } from "react";

import MenuBurger from "./menu/menuType/burger/MenuBurger";
import MenuPc from "./menu/menuType/menuPC/MenuPc";
import "./Navbar.css";

function Navbar() {
  const [windowSize, setWindowSize] = useState({ width: undefined });
  //useEffect - odczyt size windows
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app">
      <nav>{windowSize > 768 ? <MenuPc /> : <MenuBurger />}</nav>
    </div>
  );
}

export default Navbar;
