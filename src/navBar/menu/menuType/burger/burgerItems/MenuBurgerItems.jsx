import React from "react";
import "./MenuBurgerItems.css";
import MenuItems from "../../../items/MenuItems";

const MenuBurgerItems = ({ active, setActive, header }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul className="ul__menu--burger">
          <MenuItems />
        </ul>
      </div>
    </div>
  );
};
export default MenuBurgerItems;
