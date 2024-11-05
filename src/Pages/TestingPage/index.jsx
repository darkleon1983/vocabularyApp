import React, { useEffect, useState } from "react";
import styles from "./testingSpace.module.scss";
import cn from "classnames";
import words from "../../Mocks/words.json";
import WordComponent from "../../Components/WordComponent";
import TranslateComponent from "../../Components/TranslateComponent";
import StatisticBlockComponent from "../../Components/StatisticBlockComponent";

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
  const isStarted = true;

  return (
    <div>
      <h1 className="text-5xl text-center">Check your vocabulary</h1>
      <div className={cn(styles.blockContainer)}>
        <div className={cn("grid  grid-flow-col gap-4", styles.mainContainer)}>
          <WordComponent />
          <TranslateComponent />
          <StatisticBlockComponent />
        </div>
      </div>
    </div>
  );
};

export default Testingpage;
