import React, { useContext } from "react";
import { AppContext } from "../../App";
import cn from "classnames";

const ResultComponent = () => {
  const { wrightAnswers, wordsQuantity } = useContext(AppContext);

  return (
    <div>
      <h2 className={cn("text-3xl text-center")}>Ваш результат:</h2>
      <p className={cn("text-3xl text-center")}>
        {wrightAnswers} правильных ответа из {wordsQuantity}
      </p>
    </div>
  );
};

export default ResultComponent;
