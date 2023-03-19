import React from 'react';
import Icon from '../../../../components/Icon';
import { StartDateProps } from '../../../../models/startDateStep';

import styles from '../styles.m.scss';

interface StepStartDateData {
  title: string;
  subtitle: string;
}

const IsAdaptiveItem = ({ title, subtitle, updateFields, next, setStepStatus }: StepStartDateData & StartDateProps) => {
  const handleChoose = () => {
    updateFields({ start_date: title });
    setStepStatus((prev) => {
      return { ...prev, start_date: 'success' };
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
