import React, { useState } from "react";
import MenuBurgerItems from "./burgerItems/MenuBurgerItems";
import "./MenuBurger.css";

export default function MenuBurger() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <MenuBurgerItems
        active={menuActive}
        setActive={setMenuActive}
        header={"Twój Salon Urody"}
      />
    </>
  );
}
