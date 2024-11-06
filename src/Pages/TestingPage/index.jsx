import React, { useEffect, useState } from "react";
import styles from "./testingSpace.module.scss";
import cn from "classnames";
import words from "../../Mocks/words.json";
import WordComponent from "../../Components/WordComponent";
import TranslateComponent from "../../Components/TranslateComponent";
import StatisticBlockComponent from "../../Components/StatisticBlockComponent";
import StartButton from "../../Components/StartButton";
import TestArea from "../../Components/TestArea";

const Testingpage = () => {
  useEffect(() => {
    let arrayOfIndexes = [];
    words.map((item) => {
      arrayOfIndexes.push(item.id);
    });
    setArrayOfCurrentIndexes(arrayOfIndexes);
  }, []);

  const [currentWord, setCurrentWord] = useState();
  const [arrayOfCurrentIndexes, setArrayOfCurrentIndexes] = useState([]);
  console.log(arrayOfCurrentIndexes);
  const [isStarted, setIsStarted] = useState(false);
  const handleStart = () => {
    setIsStarted(true);
    console.log(isStarted);
  };

  return (
    <div>
      <h1 className="text-5xl text-center">Check your vocabulary</h1>
      {!isStarted && <StartButton handleStart={handleStart} />}
      <div className={cn(styles.blockContainer)}>
        <div className={cn("grid grid-flow-col gap-4", styles.mainContainer)}>
          {isStarted && <TestArea />}
        </div>
      </div>
    </div>
  );
};

export default Testingpage;
