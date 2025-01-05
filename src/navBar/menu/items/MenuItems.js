import React from "react";
import { NavLink, Link } from "react-router-dom";
import { NameMenuItems } from "./NameMenuItems";
import "./MenuItems.css";
export default function MenuItems() {
  return (
    <>
      {NameMenuItems.map((item, index) => (
        <li className="menuItems--li" key={index}>
          {index === 0 ? (
            <Link className="menuItems--link" to={{ pathname: item.href }}>
              <div className="span-rotate">O</div>{" "}
              <div> {console.log(item.href)}</div>
              {item.value}
            </Link>
          ) : (
            <NavLink to={{ pathname: item.href }} activeClassName="active">
              {item.value}
            </NavLink>
          )}
        </li>
      ))}
    </>
  );
}
