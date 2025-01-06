import React from "react";
import { Link } from "react-router-dom";
import styles from "./resume.module.scss";
import cn from "classnames";

const Resume = () => {
  return (
    <div className={cn("mt-32")}>
      <ul className={cn("grid grid-rows-3 grid-flow-col gap-8")}>
        <li>
          <Link to={"/training"} className={cn(styles.wordCard)}>
            Тренажер
          </Link>
        </li>
        <li>
          <Link
            to={
              "https://github.com/darkleon1983?tab=overview&from=2025-01-01&to=2025-01-06"
            }
            className={cn(styles.wordCard)}
          >
            ГитХаб
          </Link>
        </li>
        <li>
          <Link
            to={"https://htmlacademy.ru/profile/biola/certificates"}
            className={cn(styles.wordCard)}
          >
            Сертификаты
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Resume;
