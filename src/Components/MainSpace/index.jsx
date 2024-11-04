import React, { useEffect, useState } from "react";
import styles from "./mainspace.module.scss";
import cn from "classnames";
import words from "../../Mocks/words.json";
import WordComponent from "../WordComponent";
import TranslateComponent from "../TranslateComponent";
import StatisticBlockComponent from "../StatisticBlockComponent";

const MainSpace = () => {
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

export default MainSpace;
