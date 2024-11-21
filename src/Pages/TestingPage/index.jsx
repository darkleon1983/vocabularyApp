import React, { useState, useContext } from "react";
import styles from "./testingSpace.module.scss";
import cn from "classnames";
import StartButton from "../../Components/StartButton";
import TestArea from "../../Components/TestArea";
import makeFourItemsArray from "../../utils";
import adjectives from "../../Mocks/adjectives.json";
import { AppContext } from "../../App";

const Testingpage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const { setArrayOfAnswers } = useContext(AppContext);
  const handleStart = () => {
    setIsStarted(true);
    makeFourItemsArray(adjectives, setArrayOfAnswers);
  };
  // console.log("this is it", adjectives);
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
