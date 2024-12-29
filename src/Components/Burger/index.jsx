import React, { useContext } from "react";
import { AppContext } from "../../App";
import styles from "./burger.module.scss";
import cn from "classnames";

const BurgerComponent = () => {
  const { burgerHandler } = useContext(AppContext);
  return (
    <div className={cn(styles.burgerContainer)} onClick={() => burgerHandler()}>
      <button className={cn(styles.burgerButton)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* <div className={cn(styles.firstRect)}></div>
      <div className={cn(styles.secondRect)}></div>
      <div className={cn(styles.thirdRect)}></div> */}
    </div>
  );
};

export default BurgerComponent;
