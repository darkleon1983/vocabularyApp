import React, { useContext } from "react";
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
  } = useContext(AppContext);

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
              } else {
                console.log("you're wrong!");
              }
            }}
            className={cn(styles.wordCard, "text-center")}
          >
            {item}
          </div>
        ))}
        {/* {arrayOfAnswers.map((item) => (
          <div
            onClick={() => {
              arrayOfAnswers.push(words[arrayOfCurrentIndexes[0]].translation);
              if (item === words[arrayOfCurrentIndexes[0]].translation) {
                console.log("happy new year");
              }
            }}
            className={cn(styles.wordCard, "text-center")}
          >
            {item}
          </div>
        ))} */}

        {/* <div
          onClick={() => {
            // if (currentWord.translation === "делить") {
            arrayOfAnswers.push(words[arrayOfCurrentIndexes[0]].translation);
            handleAnswer();
            console.log("translation component", arrayOfAnswers);
            // }
          }}
          className={cn(styles.wordCard, "text-center")}
        >
          Делить
        </div>
        <div
          onClick={() => {
            if (currentWord.translation === "Умножать") {
              console.log(currentWord.translation);
            } else {
              console.log("fuck off");
            }
          }}
          className={cn(styles.wordCard, "text-center")}
        >
          Умножать
        </div>
        <div className={cn(styles.wordCard, "text-center")}>Презрение</div>
        <div
          onClick={() => {
            makeFourItemsArray(acjectives, setArrayOfAnswers);
            console.log(arrayOfAnswers);
          }}
          className={cn(styles.wordCard, "text-center")}
        >
          Круассан
        </div>
        <div>
          {arrayOfAnswers.map((item) => (
            <li>{item}</li>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default TranslateComponent;
