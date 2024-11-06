import React from "react";
import WordComponent from "../WordComponent";
import TranslateComponent from "../TranslateComponent";
import StatisticBlockComponent from "../StatisticBlockComponent";
import styles from "./testArea.module.scss";
import cn from "classnames";

const TestArea = () => {
  return (
    <div>
      <div className={cn("grid grid-flow-col gap-4", styles.mainContainer)}>
        <WordComponent />
        <TranslateComponent />
        <StatisticBlockComponent />
      </div>
    </div>
  );
};
export default TestArea;
