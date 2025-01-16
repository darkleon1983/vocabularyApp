import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./mobileHeader.module.scss";
import BurgerComponent from "../Burger";
import cn from "classnames";
import { AppContext } from "../../App";

const menuItems = [
  { item: "О проекте", link: "/" },
  { item: "Тренажер", link: "/training" },
  { item: "Поддержать", link: "/donate" },
  { item: "Автор", link: "/author" },
  { item: "Портфолио", link: "/portfolio" },
];

function MobileHeader() {
  const [activeMenu, setActiveMenu] = useState();
  const { isMobile, setIsMobile } = useContext(AppContext);
  return (
    <div className={cn(styles.mobileHeaderContainer, "z-50")}>
      <div className={cn("lg:invisible xl:invisible md:visible")}>
        <BurgerComponent />
      </div>
      {isMobile && (
        <div className={cn("min-w-max h-80 z-90")}>
          <nav>
            <ul className={cn(styles.itemsList, "grid grid-rows-4 ")}>
              {menuItems.map((obj, id) => (
                <li
                  key={id}
                  onClick={() => {
                    setActiveMenu(id);
                    setIsMobile(!isMobile);
                  }}
                  className={cn(
                    "text-3xl",
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
      )}
    </div>
  );
}

export default MobileHeader;
