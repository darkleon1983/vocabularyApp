import React, { useState } from "react";
import styles from "./testingSpace.module.scss";
import cn from "classnames";
import StartButton from "../../Components/StartButton";
import TestArea from "../../Components/TestArea";

const Testingpage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const handleStart = () => {
    setIsStarted(true);
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
