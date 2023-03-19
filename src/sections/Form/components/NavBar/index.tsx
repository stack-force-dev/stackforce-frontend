import React from 'react';
import classNames from 'classnames';

import styles from './styles.m.scss';
import type { StepType } from '../../types';

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
    </div>
  );
};

export default NavBar;
