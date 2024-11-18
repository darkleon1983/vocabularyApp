import React, { useContext } from "react";
import cn from "classnames";
import styles from "./translateComponent.module.scss";
import { AppContext } from "../../App";
import acjectives from "../../Mocks/adjectives.json";
import verbs from "../../Mocks/verbs.json";
import nouns from "../../Mocks/nouns.json";
import makeFourItemsArray from "../../utils";

const TranslateComponent = () => {
  let currentAdjectives = [...acjectives];
  let currentVerbs = [...verbs];
  let currentNouns = [...nouns];
  const { currentWord, handleAnswer } = useContext(AppContext);
  let result = makeFourItemsArray(currentAdjectives);
  console.log(result);

  return (
    <div className={cn(styles.answerBlock)}>
      <h2 className="text-3xl">Перевод:</h2>
      <div className={cn(styles.blockContainer, "grid grid-rows-4 gap-4")}>
        <div
          onClick={() => {
            handleAnswer();
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
          onClick={() => console.log("Круассан")}
          className={cn(styles.wordCard, "text-center")}
        >
          Круассан
        </div>
      </div>
    </div>
  );
};

export default TranslateComponent;
