import classNames from 'classnames';
import React, { useState } from 'react';
import { stepActiveInputs } from '../../../../models/stepStatus';

import styles from './styles.m.scss';

interface NavBarProps {
  goto: (index: number) => void;
  setStepStatus: React.Dispatch<React.SetStateAction<stepActiveInputs>>;
  stepStatus: stepActiveInputs;
  currentStepIndex: number;
}
const NavBar = ({ goto, stepStatus, setStepStatus, currentStepIndex }: NavBarProps) => {
  const hadleClickGoToTypeStep = () => {
    goto(0);
  };
  const hadleClickGoToIsAdaptiveStep = () => {
    goto(1);
  };
  const hadleClickGoToStateStep = () => {
    goto(2);
  };
  const hadleClickGoToStartDateStep = () => {
    goto(3);
  };
  return (
    <div className={styles.navContainer}>
      <div
        onClick={hadleClickGoToTypeStep}
        className={classNames(
          styles.type,
          styles.item,
          { [styles.success]: stepStatus.type === 'success' },
          { [styles.active]: currentStepIndex === 0 }
        )}
      >
        Электронная коммерция
      </div>
      <div
        onClick={hadleClickGoToIsAdaptiveStep}
        className={classNames(
          styles.isAdaptive,
          styles.item,
          { [styles.success]: stepStatus.is_adaptive === 'success' },
          { [styles.unActive]: stepStatus.is_adaptive === 'unactive' },
          { [styles.active]: currentStepIndex === 1 }
        )}
      >
        Адаптивы
      </div>
      <div
        onClick={hadleClickGoToStateStep}
        className={classNames(
          styles.state,
          styles.item,
          { [styles.success]: stepStatus.state === 'success' },
          { [styles.unActive]: stepStatus.state === 'unactive' },
          { [styles.active]: currentStepIndex === 2 }
        )}
      >
        Статус
      </div>
      <div
        onClick={hadleClickGoToStartDateStep}
        className={classNames(
          styles.start,
          styles.item,
          { [styles.success]: stepStatus.start_date === 'success' },
          { [styles.unActive]: stepStatus.start_date === 'unactive' },
          { [styles.active]: currentStepIndex === 3 }
        )}
      >
        Сроки
      </div>
    </div>
  );
};

export default NavBar;
