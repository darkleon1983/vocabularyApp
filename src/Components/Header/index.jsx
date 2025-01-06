import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import burger from "../../burger.svg";
import cn from "classnames";

const menuItems = [
  { item: "О проекте", link: "/" },
  { item: "Тренажер", link: "/training" },
  { item: "Поддержать", link: "/donate" },
  { item: "Автор", link: "/author" },
  { item: "Резюме", link: "/resume" },
];
// const isTrue = false;
function Header() {
  const [activeMenu, setActiveMenu] = useState();

  return (
    <div className={cn(styles.header, "pt-4")}>
      <nav>
        <ul className="grid grid-cols-5 place-items-center">
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
      </nav>
    </div>
  );
}

export default Header;
