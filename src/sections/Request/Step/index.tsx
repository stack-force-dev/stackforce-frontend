import React from 'react';

import Card from '@sections/Request/Card';
import type { StepType } from '@interfaces/request';

import styles from './styles.m.scss';

type StepProps = {
  config: StepType;
  handleChoose: (value: number | boolean) => void;
};

const Step = ({ config, handleChoose }: StepProps) => {
  return (
    <>
      <div className={styles.title}>{config.name}</div>
      <div className={styles.step}>
        {config.cards.map((card) => (
          <Card data={card} key={card.title} handleChoose={handleChoose} />
        ))}
      </div>
    </>
  );
};

export default Step;
