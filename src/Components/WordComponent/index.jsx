import React from "react";
import words from "../../Mocks/words.json";
import styles from "./wordComponent.module.scss";
import cn from "classnames";

const WordComponent = () => {
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
          {words[0].word}
        </div>
      </div>
    </div>
  );
};

export default WordComponent;
