import React from "react";
import styles from "./mainspace.module.scss";
import cn from "classnames";
import words from "../../Mocks/words.json";

const MainSpace = () => {
  console.log(words);
  return (
    <div>
      <h1 className="text-5xl text-center">Check your vocabulary</h1>
      <div className={cn(styles.blockContainer)}>
        <div className={cn("grid  grid-flow-col gap-4", styles.mainContainer)}>
          <div className={cn(styles.questionBlock, "grid")}>
            <h2 className="text-3xl text-center">Слово:</h2>
            <div
              className={cn(
                styles.blockContainer,
                "grid justify-self-center place-items-baseline"
              )}
            >
              <div className={cn(styles.wordCard, styles.question)}>
                {words[0].word}
              </div>
            </div>
          </div>
          <div className={cn(styles.answerBlock)}>
            <h2 className="text-3xl">Перевод:</h2>
            <div
              className={cn(styles.blockContainer, "grid grid-rows-4 gap-4")}
            >
              <div className={cn(styles.wordCard, "text-center")}>Делить</div>
              <div className={cn(styles.wordCard, "text-center")}>Умножать</div>
              <div className={cn(styles.wordCard, "text-center")}>
                Презрение
              </div>
              <div className={cn(styles.wordCard, "text-center")}>Круассан</div>
            </div>
          </div>
          <div
            className={cn(
              "grid col-span-2 grid-cols-2 grid-rows-2 gap-8",
              styles.statisticBlock
            )}
          >
            <div className="text-center">
              <h2 className="text-3xl">Не верно:</h2>
              <div className={cn(styles.blockContainer)}>
                <span className="text-6xl">1</span>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl">Верно:</h2>
              <div className={cn(styles.blockContainer)}>
                <span className="text-6xl ">10</span>
              </div>
            </div>
            <div className="row-span-2 col-span-2 text-center">
              <h2 className="text-3xl">Результат:</h2>
              <div className={cn(styles.blockContainer)}>
                <span className="text-7xl">45%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSpace;
