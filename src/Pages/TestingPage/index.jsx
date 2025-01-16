import React, { useState, useContext } from "react";
import styles from "./testingSpace.module.scss";
import cn from "classnames";
import StartButton from "../../Components/StartButton";
import TestArea from "../../Components/TestArea";
import makeFourItemsArray from "../../utils";
import adjectives from "../../Mocks/adjectives.json";
import { AppContext } from "../../App";
import words from "../../Mocks/words.json";
import ResultComponent from "../../Components/ResultComponent";

const Testingpage = () => {
  const {
    setArrayOfAnswers,
    arrayOfAnswers,
    arrayOfCurrentIndexes,
    isStatisticReady,
    isStarted,
    setIsStarted,
    wrightAnswers,
  } = useContext(AppContext);
  const handleStart = () => {
    setIsStarted(true);
    makeFourItemsArray(
      adjectives,
      setArrayOfAnswers,
      words[arrayOfCurrentIndexes[0]].translation
    );
    arrayOfAnswers.push(words[arrayOfCurrentIndexes[0]].translation);
  };
  return (
    <div className={cn("sm:mt-20")}>
      {!isStatisticReady ? (
        <h1 className={cn("text-5xl text-center")}>Check your vocabulary</h1>
      ) : (
        <h1 className={cn("text-5xl text-center")}>Вы прошли проверку!</h1>
      )}
      {!isStarted && !isStatisticReady && (
        <StartButton handleStart={handleStart} />
      )}
      <div className={cn(styles.blockContainer)}>
        <div className={cn("grid grid-flow-col gap-4", styles.mainContainer)}>
          {isStarted && <TestArea />}
        </div>
        <div>{isStatisticReady && <ResultComponent />}</div>
      </div>
    </div>
  );
};

export default Testingpage;
