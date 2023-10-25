import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <header className="main-header">
      <div className="logo--div">
        <motion.div
          className="div-motion"
          // drag="x"
          // dragConstraints={{ left: 50 }}
          // animate={{
          //   rotateY: [0, 30, 60, 90, 270, 360, 360, 270, 90, 60, 30, 0],
          // }}
          // transition={{ repeat: Infinity, duration: 10 }}
        >
          <img className="logo__div--img" src={LogoFeet} alt="logo" />
        </motion.div>
        <motion.div
        // className="div-motion"
        // // drag="x"
        // dragConstraints={{ left: 50 }}
        // animate={{
        //   scale: 1,
        //   rotateY: [360, 270, 90, 0, 0, 30, 60, 90, 270, 360],
        // }}
        // transition={{ repeat: Infinity, duration: 10 }}
        // initial={{ scale: 0 }}
        >
          <img className="logo__div--img" src={LogoFace} alt="logo" />
        </motion.div>
        <img className="logo__div--img" src={LogoName} alt="logo" />
      </div>
      <nav className="main__header--nav">
        {windowSize > 576 ? <MenuPc /> : <MenuBurger />}
      </nav>
    </header>
  );
}

export default Navbar;
