import React, { useState } from "react";
import words from "../../Mocks/words.json";
import styles from "./wordComponent.module.scss";
import cn from "classnames";

const WordComponent = ({ value, handleAnswer, indexes }) => {
  console.log("speed", indexes);
  const [currentWord, setCurrentWord] = useState(indexes);

  return (
    <div className={cn(styles.questionBlock, "grid")}>
      <h2 className="text-3xl text-center">Слово:</h2>
      <div
        className={cn(
          styles.blockContainer,
          "grid justify-self-center place-items-baseline"
        )}
      >
        <div
          onClick={() => {
            handleAnswer();
            console.log(indexes);
          }}
          className={cn(styles.wordCard, styles.question)}
        >
          {value[indexes[0]].word}
        </div>
      </div>
    </div>
  );
};

export default WordComponent;
