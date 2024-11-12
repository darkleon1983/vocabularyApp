import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import WordComponent from "../WordComponent";
import TranslateComponent from "../TranslateComponent";
import StatisticBlockComponent from "../StatisticBlockComponent";
import styles from "./testArea.module.scss";
import cn from "classnames";
import words from "../../Mocks/words.json";

const TestArea = () => {
  return (
    <div>
      <div className={cn("grid grid-flow-col gap-5", styles.mainContainer)}>
        <WordComponent />
        <TranslateComponent />
        <StatisticBlockComponent />
      </div>
    </div>
  );
};
export default TestArea;
