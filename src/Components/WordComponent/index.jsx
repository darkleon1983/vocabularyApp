import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../App";
import words from "../../Mocks/words.json";
import styles from "./wordComponent.module.scss";
import cn from "classnames";

const WordComponent = () => {
  const { arrayOfCurrentIndexes, handleAnswer } = useContext(AppContext);
  return (
    <div className={cn(styles.questionBlock, "grid")}>
      <h2 className="text-3xl text-center">Слово:</h2>
      <div
        className={cn(
          styles.blockContainer,
          "grid justify-self-center place-items-baseline"
        )}
      >
        <div className={cn(styles.wordCard, styles.question)}>
          {words[arrayOfCurrentIndexes[0]].word}
        </div>
      </div>
    </div>
  );
};

export default WordComponent;
