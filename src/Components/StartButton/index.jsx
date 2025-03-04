import React, { useContext } from "react";
import styles from "./startButton.module.scss";
import cn from "classnames";
import { AppContext } from "../../App";

const StartButton = ({ handleStart }) => {
  return (
    <div className="text-center mt-10 z-0">
      <button onClick={() => handleStart()} className={cn(styles.pushable)}>
        <span className={cn(styles.shadow)}></span>
        <span className={cn(styles.edge)}></span>
        <span className={cn(styles.front)}> Начать тест </span>
      </button>
    </div>
  );
};

export default StartButton;
