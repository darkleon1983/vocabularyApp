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
  } = useContext(AppContext);
  const [count, setCount] = useState(0);
  const handlerClick = () => {
    setCount(count + 1);
  };
  return (
    <div className={cn(styles.answerBlock)}>
      <h2 className="text-3xl">Перевод:</h2>
      <div className={cn(styles.blockContainer, "grid grid-rows-4 gap-4")}>
        {arrayOfAnswers.sort().map((item) => (
          <div
            onClick={() => {
              arrayOfAnswers.push(words[arrayOfCurrentIndexes[0]].translation);
              if (item === words[arrayOfCurrentIndexes[0]].translation) {
                handleAnswer();
                wrightAnswersAddingHandler();
                console.log("in function", wrightAnswers);
              } else {
                console.log("you're wrong!");
              }
            }}
            className={cn(styles.wordCard, "text-center")}
          >
            {item}
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlerClick}>{count}</button>
      </div>
    </div>
  );
};

export default TranslateComponent;
