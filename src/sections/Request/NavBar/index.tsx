import classNames from "classnames";
import React from "react";

import type { StepType } from "@interfaces/request";

import styles from "./styles.m.scss";

interface NavBarProps {
  config: Array<StepType>;
  currentStep: number;
  handleChoose: (step: number) => void;
}

const NavBar = ({ config, currentStep, handleChoose }: NavBarProps) => {
  return (
    <div className={styles.navContainer}>
      {config.map(({ navbarTitle: title }, index) => (
        <div
          key={title}
          onClick={() => handleChoose(index)}
          className={classNames(
            styles.item,
            { [styles.success]: index < currentStep },
            { [styles.active]: index === currentStep }
          )}
        >
          {title}
        </div>
      ))}
      <div className={classNames(styles.item, { [styles.active]: config.length === currentStep })}>Ваши контакты</div>
    </div>
  );
};

export default NavBar;
