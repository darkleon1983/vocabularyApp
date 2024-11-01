import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import cn from "classnames";

const menuItems = ["О проекте", "Тренажер", "Поддержать проект", "Автор"];
const isTrue = false;
function Header() {
  // console.log(menuItems);

  return (
    <div className={styles.header}>
      <ul className="grid grid-cols-4">
        {menuItems.map((item, index) => (
          <li className={cn("text-xl", styles.item, isTrue && styles.red)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
