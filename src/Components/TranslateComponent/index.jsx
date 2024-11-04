import React from "react";
import cn from "classnames";
import styles from "./translateComponent.module.scss";

const TranslateComponent = () => {
  return (
    <div className={cn(styles.answerBlock)}>
      <h2 className="text-3xl">Перевод:</h2>
      <div className={cn(styles.blockContainer, "grid grid-rows-4 gap-4")}>
        <div className={cn(styles.wordCard, "text-center")}>Делить</div>
        <div className={cn(styles.wordCard, "text-center")}>Умножать</div>
        <div className={cn(styles.wordCard, "text-center")}>Презрение</div>
        <div className={cn(styles.wordCard, "text-center")}>Круассан</div>
      </div>
    </div>
  );
};

export default TranslateComponent;
