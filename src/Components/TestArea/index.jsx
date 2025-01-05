import React from "react";
import WordComponent from "../WordComponent";
import TranslateComponent from "../TranslateComponent";
import StatisticBlockComponent from "../StatisticBlockComponent";
import styles from "./testArea.module.scss";
import cn from "classnames";

// const TestArea = () => {
//   return (
//     <div>
//       <div
//         className={cn(
//           "grid grid-flow-col gap-5 md:grid-cols-4 md:grid-rows-3 md:gap-0",
//           styles.mainContainer
//         )}
//       >
//         <div className={cn("md:col-start-1 md:col-span-2")}>
//           <WordComponent />
//         </div>
//         <div className={cn("md:col-start-3 md:col-span-2")}>
//           <TranslateComponent />
//         </div>
//         <div className={cn("md:col-start-2 md:col-span-2")}>
//           <StatisticBlockComponent />
//         </div>
//       </div>
//     </div>
//   );
// };
const TestArea = () => {
  return (
    <div>
      <div
        className={cn(
          "grid grid-flow-col gap-5 md:grid-cols-4 md:block",
          styles.mainContainer
        )}
      >
        <div className={cn("")}>
          <WordComponent />
        </div>
        <div className={cn("")}>
          <TranslateComponent />
        </div>
        <div className={cn("")}>
          <StatisticBlockComponent />
        </div>
      </div>
    </div>
  );
};
export default TestArea;
