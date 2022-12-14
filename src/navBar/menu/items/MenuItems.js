import React from "react";
import { Link } from "react-router-dom";
import { NameMenuItems } from "./NameMenuItems";

export default function MenuItems() {
  return (
    <>
      {NameMenuItems.map((item, index) => (
        <li className="menuItems--li" key={index}>
          {index === 0 ? (
            <Link className="menuItems--link" to={{ pathname: item.href }}>
              <div className="span-rotate">O</div>
              {item.value}
            </Link>
          ) : (
            <Link to={{ pathname: item.href }}>{item.value}</Link>
          )}
        </li>
      ))}
    </>
  );
}
