import React from 'react';
import Icon from '../../../../components/Icon';
import { IsAdaptiveFormProps } from '../../../../models/isAdaptiveStep';

import styles from '../styles.m.scss';

interface StepIsAdaptiveData {
  title: string;
  subtitle: string;
  value: boolean;
}

const IsAdaptiveItem = ({
  title,
  subtitle,
  value,
  updateFields,
  next,
  setStepStatus,
}: StepIsAdaptiveData & IsAdaptiveFormProps) => {
  const handleChoose = () => {
    updateFields({ is_adaptive: value });
    setStepStatus((prev) => {
      return { ...prev, is_adaptive: 'success', state: 'active' };
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
