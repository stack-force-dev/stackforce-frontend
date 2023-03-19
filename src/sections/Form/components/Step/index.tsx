import React from 'react';

import Card from '../../components/Card';
import type { StepType } from '../../types';

import styles from './styles.m.scss';

type StepProps = {
  config: StepType;
  handleChoose: (value: number | boolean) => void;
};

const Step = ({ config, handleChoose }: StepProps) => {
  const handleClick = (value: number | boolean) => {
    // setData((prev) => ({ ...prev, [config.key]: value }));
  };

  return (
    <>
      <div className={styles.title}>{config.name}</div>
      <div className={styles.form}>
        {config.cards.map((card) => (
          <Card data={card} key={card.title} handleChoose={handleChoose} />
        ))}
      </div>
    </>
  );
};

export default Step;
