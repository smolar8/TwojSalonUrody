import React from "react";
import { NameMenuItems } from "./NameMenuItems";
export default function MenuItems() {
  return (
    <>
      {NameMenuItems.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.value}</a>
          <span className="material-icons">{item.icon}</span>
        </li>
      ))}
    </>
  );
}
