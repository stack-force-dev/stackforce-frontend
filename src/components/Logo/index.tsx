import React from "react";

import Icon from "../Icon";
import d, { useDictionary } from "@utils/dictionary";

import styles from "./styles.m.scss";

const Logo = () => {
  const [locale] = useDictionary();

  return (
    <div className={styles.logo}>
      <div className={styles.logoHref}>
        <li data-section-link={1}>
          <Icon name="logo" />
        </li>
        <div data-section-link={1} className={styles.logoTitle}>
          {d.header.title[locale]}
        </div>
      </div>
      <div className={styles.logoSubTitle}>{d.header.subTitle[locale]}</div>
    </div>
  );
};

export default Logo;
