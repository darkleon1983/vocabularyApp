import React, { useContext, useState } from "react";
import cn from "classnames";
import styles from "./translateComponent.module.scss";
import { AppContext } from "../../App";
import acjectives from "../../Mocks/adjectives.json";
import verbs from "../../Mocks/verbs.json";
import nouns from "../../Mocks/nouns.json";
import makeFourItemsArray from "../../utils";
import words from "../../Mocks/words.json";

const TranslateComponent = () => {
  const {
    currentWord,
    handleAnswer,
    arrayOfAnswers,
    setArrayOfAnswers,
    arrayOfCurrentIndexes,
    wordsQuantity,
    wrightAnswers,
    setWrightAnswers,
    wrongAnswers,
    wrightAnswersAddingHandler,
    wrongAnswersAddingHandler,
    statisticHandler,
    setIsStarted,
  } = useContext(AppContext);

  return (
    <div className={cn(styles.answerBlock)}>
      <h2 className="text-3xl">Перевод:</h2>
      <div className={cn(styles.blockContainer, "grid grid-rows-4 gap-4")}>
        {arrayOfAnswers.sort().map((item) => (
          <div
            onClick={() => {
              if (arrayOfCurrentIndexes.length === 1) {
                statisticHandler();
                setIsStarted(false);
                return;
              }
              console.log("wrightAnswers", wrongAnswers);
              arrayOfAnswers.push(words[arrayOfCurrentIndexes[0]].translation);
              if (item === words[arrayOfCurrentIndexes[0]].translation) {
                handleAnswer();
                wrightAnswersAddingHandler();
              } else {
                handleAnswer();
                wrongAnswersAddingHandler();
              }
            }}
            className={cn(styles.wordCard, "text-center")}
          >
            {item}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default TranslateComponent;
