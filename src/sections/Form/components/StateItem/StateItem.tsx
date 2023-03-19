import React from 'react';
import Icon from '../../../../components/Icon';
import { StateFormProps } from '../../../../models/stateStep';

import styles from '../styles.m.scss';

interface StepStateData {
  title: string;
  subtitle: string;
}

const IsAdaptiveItem = ({ title, subtitle, updateFields, next, setStepStatus }: StepStateData & StateFormProps) => {
  const handleChoose = () => {
    updateFields({ state: title });
    setStepStatus((prev) => {
      return { ...prev, state: 'success', start_date: 'active' };
    });
    next();
  };

  return (
    <div className={styles.chooseItem} onClick={handleChoose}>
      <div className={styles.container}>
        <div className={styles.itemLogo}>
          <Icon name="formBag" />
        </div>
        <div className={styles.itemTitle}>{title}</div>
        <div className={styles.itemSubtitle}>{subtitle}</div>
      </div>
    </div>
  );
};

export default IsAdaptiveItem;
