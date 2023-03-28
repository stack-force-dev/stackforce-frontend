import classNames from "classnames";
import React from "react";

import d, { useDictionary } from "@utils/dictionary";

import styles from "./styles.m.scss";

const SendFormButton = () => {
  const [locale] = useDictionary();

  return (
    <div className={styles.sendForm} data-section-link={6}>
      {d.header.sendForm[locale]}
    </div>
  );
};

export default SendFormButton;
