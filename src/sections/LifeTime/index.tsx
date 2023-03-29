import React from "react";

import Icon from "@components/Icon";

import config from "./config";
import styles from "./styles.m.scss";

const LifeTime = () => {
  return (
    <section className={styles.lifeTime} id="section-5">
      <div className="container">
        <div className={styles.header}>
          <h3>Как мы работаем</h3>
          <div className={styles.divider} />
          <h6 className={styles.description}>
            Создаем продукт на основе бизнес-целей вашей компании <br /> и глубокого понимания потребностей целевой
            аудитории.
          </h6>
        </div>
        <div className={styles.content}>
          {config.map((item, index) => (
            <div className={styles.item} key={item.title}>
              <div className={styles.icon}>
                <Icon name={`lifetime${index + 1}`} />
              </div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeTime;
