import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import cn from "classnames";

const menuItems = ["О проекте", "Тренажер", "Поддержать проект", "Автор"];
const isTrue = false;
function Header() {
  const [activeMenu, setActiveMenu] = useState();

  return (
    <div className={styles.header}>
      <ul className="grid grid-cols-4">
        {menuItems.map((item, id) => (
          <li
            key={id}
            onClick={() => setActiveMenu(id)}
            className={cn(
              "text-xl",
              styles.item,
              activeMenu === id && styles.active
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
