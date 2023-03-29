import React from "react";

import Icon from "@components/Icon";

import type { CardType } from "@interfaces/claim";

import styles from "./styles.m.scss";

type CardProps = {
  data: CardType;
  handleChoose: (value: number) => void;
};

const Card = ({ data, handleChoose }: CardProps) => {
  return (
    <div className={styles.chooseItem} onClick={() => handleChoose(data.value)}>
      <div className={styles.container}>
        <div className={styles.itemLogo}>
          <Icon name="claimBag" />
        </div>
        <div className={styles.itemTitle}>{data.title}</div>
      </div>
    </div>
  );
};

export default Card;
