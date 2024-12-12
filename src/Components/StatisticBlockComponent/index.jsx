import React, { useContext } from "react";
import cn from "classnames";
import styles from "./statisticBlockComponent.module.scss";
import { AppContext } from "../../App";

const StatisticBlockComponent = () => {
  const { wordsQuantity, wrightAnswers, wrongAnswers } = useContext(AppContext);

  return (
    <div
      className={cn(
        "grid col-span-2 grid-cols-2 grid-rows-2 gap-8",
        styles.statisticBlock
      )}
    >
      <div className="text-center">
        <h2 className="text-3xl">Не верно:</h2>
        <div className={cn(styles.blockContainer)}>
          <span className="text-6xl">{wrongAnswers}</span>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-3xl">Верно:</h2>
        <div className={cn(styles.blockContainer)}>
          <span className="text-6xl ">{wrightAnswers}</span>
        </div>
      </div>
      <div className="row-span-2 col-span-2 text-center">
        <h2 className="text-3xl">Всего слов:</h2>
        <div className={cn(styles.blockContainer)}>
          <span className="text-7xl">{wrightAnswers + wrongAnswers}</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticBlockComponent;
