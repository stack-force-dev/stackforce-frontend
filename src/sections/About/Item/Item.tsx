import React from "react";

import { AboutData } from "@root/interfaces/about";

import styles from "./styles.m.scss";

const Item = ({ title, list }: AboutData) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{title}</div>
      <div className={styles.list}>
        {list.map((listItem) => (
          <div key={listItem} className={styles.listItem}>
            {listItem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
