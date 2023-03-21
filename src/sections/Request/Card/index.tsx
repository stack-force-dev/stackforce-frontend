import React from "react";

import Icon from "@components/Icon";

import type { CardType } from "@interfaces/request";

import styles from "./styles.m.scss";

type CardProps = {
  data: CardType;
  handleChoose: (value: number | boolean) => void;
};

const Card = ({ data, handleChoose }: CardProps) => {
  return (
    <div className={styles.chooseItem} onClick={() => handleChoose(data.value)}>
      <div className={styles.container}>
        <div className={styles.itemLogo}>
          <Icon name="requestBag" />
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.itemTitle}>{data.title}</div>
          <div className={styles.itemSubtitle}>{data.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
