import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import MenuBurger from "./menu/menuType/burger/MenuBurger";
import MenuPc from "./menu/menuType/menuPC/MenuPc";
import "./styleNavbar/Navbar.css";
import LogoCenter from "../img&icon/logo/HeadLogo-center.jpg";
import LogoBetwen from "../img&icon/logo/HeadLogo-between.jpg";
import LogoLeft from "../img&icon/logo/HeadLogo-left.jpg";
import LogoRight from "../img&icon/logo/HeadLogo-right.jpg";

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
    <header className="main--header">
      <div className="logo--div">
        <img className="logo__div--imgLeft" src={LogoLeft} alt="logo" />
        <img className="logo__div--imgBetween" src={LogoBetwen} alt="logo" />
        <img className="logo__div--imgCenter" src={LogoCenter} alt="logo" />
        <img className="logo__div--imgBetween" src={LogoBetwen} alt="logo" />
        <img className="logo__div--imgRight" src={LogoRight} alt="logo" />
      </div>

      <nav className="main__header--nav">
        {windowSize[0] > 853 ? <MenuPc /> : <MenuBurger />}
      </nav>
    </header>
  );
}

export default Navbar;
