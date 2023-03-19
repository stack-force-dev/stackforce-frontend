import React from 'react';
import Icon from '../../../../components/Icon';
import { TypeFormProps } from '../../../../models/typeProjectStep';

import styles from '../styles.m.scss';

interface StepItemData {
  title: string;
  subtitle: string;
}

const TypeItem = ({ title, subtitle, updateFields, next, setStepStatus }: StepItemData & TypeFormProps) => {
  const handleChoose = () => {
    updateFields({ type: title });
    setStepStatus((prev) => {
      return { ...prev, type: 'success', is_adaptive: 'active' };
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

export default TypeItem;
