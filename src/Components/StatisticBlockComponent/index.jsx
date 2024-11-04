import React from "react";
import cn from "classnames";
import styles from "./statisticBlockComponent.module.scss";

const StatisticBlockComponent = () => {
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
          <span className="text-6xl">1</span>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-3xl">Верно:</h2>
        <div className={cn(styles.blockContainer)}>
          <span className="text-6xl ">10</span>
        </div>
      </div>
      <div className="row-span-2 col-span-2 text-center">
        <h2 className="text-3xl">Результат:</h2>
        <div className={cn(styles.blockContainer)}>
          <span className="text-7xl">45%</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticBlockComponent;
