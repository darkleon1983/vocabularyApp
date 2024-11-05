import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import cn from "classnames";

const menuItems = [
  { item: "О проекте", link: "/" },
  { item: "Тренажер", link: "/training" },
  { item: "Поддержать проект", link: "/donate" },
  { item: "Автор", link: "/author" },
];
const isTrue = false;
function Header() {
  const [activeMenu, setActiveMenu] = useState();

  return (
    <div className={cn(styles.header, "pt-4")}>
      <ul className="grid grid-cols-4">
        {menuItems.map((obj, id) => (
          <li
            key={id}
            onClick={() => setActiveMenu(id)}
            className={cn(
              "text-xl",
              styles.item,
              activeMenu === id && styles.active
            )}
          >
            <Link to={obj.link}>{obj.item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
