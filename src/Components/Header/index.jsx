import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const menuItems = ["О проекте", "Тренажер", "Поддержать проект", "Автор"];
function Header() {
  // console.log(menuItems);

  return (
    <div className={styles.header}>
      <ul className="grid grid-cols-4">
        {menuItems.map((item, index) => (
          <li className="text-xl">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
