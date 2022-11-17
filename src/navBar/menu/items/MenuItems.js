import React from "react";
import { Link } from "react-router-dom";
import { NameMenuItems } from "./NameMenuItems";
export default function MenuItems() {
  return (
    <>
      {NameMenuItems.map((item, index) => (
        <li key={index}>
          <Link to={{ pathname: item.href }}>{item.value}</Link>
          {/* <span className="material-icons">{item.icon}</span> */}
        </li>
      ))}
    </>
  );
}
