import React from "react";

import styles from "./styles.m.scss";

const images = require.context("../../assets/images/stack");
const importAll = (r) => r.keys().map((item) => r(item).default);
const companies = importAll(images);

const Companies = () => {
  return (
    <div className={styles.companies}>
      <div className={styles.companiesContent}>
        <div className={styles.section}>
          {companies.map((image) => (
            <img src={image} alt={image} className={styles.company} key={image} />
          ))}
        </div>
        <div className={styles.section}>
          {companies.map((image) => (
            <img src={image} alt={image} className={styles.company} key={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
