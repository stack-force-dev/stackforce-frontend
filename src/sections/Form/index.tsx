import React, { useState } from 'react';
import { emailRegex } from './formRegex';
import { fetchForm } from '../../api/serviceForm';
import Icon from '../../components/Icon';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import Type from './Steps/Type';
import IsAdaptive from './Steps/IsAdaptive';
import State from './Steps/State';
import StartDate from './Steps/StartDate';
import Info from './Steps/Info';

import styles from './styles.m.scss';

interface Inputs {
  email: string;
  phone: string;
  message: string;
  type: string;
  is_adaptive: boolean;
  state: string;
  start_date: string;
}

const INITIAL_DATA: Inputs = {
  email: '',
  phone: '',
  message: '',
  type: '',
  is_adaptive: true,
  state: '',
  start_date: '',
};
const Form = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<Inputs>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const stepsArray = [
    <Type {...data} updateFields={updateFields} />,
    <IsAdaptive {...data} updateFields={updateFields} />,
    <State {...data} updateFields={updateFields} />,
    <StartDate {...data} updateFields={updateFields} />,
    // <Info {...data} updateFields={updateFields} />,
  ];

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(stepsArray);

  return (
    <section className={styles.form} id="section-3">
      <div className={styles.container}>
        <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '.5rem',
            justifyContent: 'flex-end',
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="button" onClick={next}>
            {isLastStep ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
