import React from 'react';
import Icon from '../../../../components/Icon';

import styles from '../styles.m.scss';

interface StepItemData {
  title: string;
  subtitle: string;
}
type TypeData = {
  type: string;
};
type StepItemProps = StepItemData & {
  updateFields: (fields: Partial<TypeData>) => void;
};

const TypeItem = ({ title, subtitle, updateFields }: StepItemProps) => {
  const handleChoose = () => {
    updateFields({ type: title });
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
