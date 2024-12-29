import React from "react";
import styles from "./NotFoundBlock.module.scss";
import { Link } from "react-router-dom";
import cn from "classnames";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>((</span> <br />
      </h1>
      <p className={styles.description}>
        Страница еще не готова, но основной функционал сайта работает и вы
        можете развивать свой лексикон. <br />
        <Link to={"/training"} className={cn("underline")}>
          Перейти к тренировке
        </Link>
      </p>
    </div>
  );
};

export default NotFoundBlock;
