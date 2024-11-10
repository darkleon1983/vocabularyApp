import React, { useState, useEffect } from "react";
import WordComponent from "../WordComponent";
import TranslateComponent from "../TranslateComponent";
import StatisticBlockComponent from "../StatisticBlockComponent";
import styles from "./testArea.module.scss";
import cn from "classnames";
import words from "../../Mocks/words.json";

const TestArea = () => {
  // useEffect(() => {
  //   let arrayOfIndexes = [];
  //   words.map((item) => {
  //     arrayOfIndexes.push(item.id);
  //   });
  //   setArrayOfCurrentIndexes(arrayOfIndexes);
  // }, []);
  const [arrayOfCurrentIndexes, setArrayOfCurrentIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7,
  ]);
  // console.log("testArea", arrayOfCurrentIndexes);
  const handleAnswer = () => {
    alert("it is alive");
    arrayOfCurrentIndexes.shift();
    setArrayOfCurrentIndexes(arrayOfCurrentIndexes);
    // console.log(arrayOfCurrentIndexes);
  };
  // console.log("indexes", arrayOfCurrentIndexes);

  return (
    <div>
      <div className={cn("grid grid-flow-col gap-5", styles.mainContainer)}>
        <WordComponent
          value={words}
          handleAnswer={handleAnswer}
          indexes={arrayOfCurrentIndexes}
        />
        <TranslateComponent />
        <StatisticBlockComponent />
      </div>
    </div>
  );
};
export default TestArea;
