import React, { ReactElement, useState } from 'react';
import { emailRegex } from './formRegex';
import { fetchForm } from '../../api/serviceForm';
import Type from './Steps/Type';
import IsAdaptive from './Steps/IsAdaptive';
import State from './Steps/State';
import StartDate from './Steps/StartDate';
import Info from './Steps/Info';

import styles from './styles.m.scss';
import { stepActiveData } from '../../models/stepStatus';
import { Inputs } from '../../models/inputs';
import NavBar from './components/NavBar/NavBar';
import Icon from '../../components/Icon';

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
  const [data, setData] = useState(INITIAL_DATA); // хранилище формы
  const [currentStepIndex, setCurrentStepIndex] = useState(0); //хранилище номера текущего шага
  const [stepStatus, setStepStatus] = useState(stepActiveData);
  let isFirstStep = currentStepIndex === 0;

  // функция для обновления статуса шага при переходе
  const reloadStepStatus = (index: number) => {
    switch (index) {
      case 0:
        {
          setStepStatus((prev) => {
            return {
              ...prev,
              type: 'active',
              is_adaptive: 'unactive',
              state: 'unactive',
              start_date: 'unactive',
            };
          });
        }
        break;
      case 1:
        {
          setStepStatus((prev) => {
            return {
              ...prev,
              is_adaptive: 'active',
              state: 'unactive',
              start_date: 'unactive',
            };
          });
        }
        break;
      case 2:
        {
          setStepStatus((prev) => {
            return {
              ...prev,
              state: 'active',
              start_date: 'unactive',
            };
          });
        }
        break;
      case 3:
        {
          setStepStatus((prev) => {
            return {
              ...prev,
              start_date: 'active',
            };
          });
        }
        break;
      default:
        break;
    }
  };
  //функция для внесения данных в форму
  const updateFields = (fields: Partial<Inputs>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  //функция для перехода на след страницу
  const next = () => () => {
    setCurrentStepIndex((i) => {
      if (i >= 4 - 1) return i;
      return i + 1;
    });
  };
  //функция для перехода на пред страницу
  const back = () => {
    reloadStepStatus(currentStepIndex - 1);
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  //функция для перехода на опред страницу
  const goTo = (index: number) => {
    setCurrentStepIndex(index);
    reloadStepStatus(index);
  };

  const stepsArray = [
    <Type {...data} updateFields={updateFields} next={next()} setStepStatus={setStepStatus} />,
    <IsAdaptive {...data} updateFields={updateFields} next={next()} setStepStatus={setStepStatus} />,
    <State {...data} updateFields={updateFields} next={next()} setStepStatus={setStepStatus} />,
    <StartDate {...data} updateFields={updateFields} next={next()} setStepStatus={setStepStatus} />,
    // <Info {...data} updateFields={updateFields} />,
  ];

  let step = stepsArray[currentStepIndex];
  // let isLastStep = currentStepIndex === stepsArray.length - 1;

  return (
    <section className={styles.form} id="section-3">
      <div className={styles.container}>
        <div className={styles.header}>
          {!isFirstStep && (
            <div onClick={() => back()} className={styles.formBack}>
              <Icon name="formBack" />
            </div>
          )}
          <div className={styles.stepsTitle}>
            ШАГ {currentStepIndex + 1} ИЗ {stepsArray.length}
          </div>
          <div className={styles.progressBar}>
            <div
              style={{
                width:
                  currentStepIndex === 0
                    ? '25%'
                    : currentStepIndex == 1
                    ? '50%'
                    : currentStepIndex == 2
                    ? '70%'
                    : '100%',
              }}
            ></div>
          </div>
        </div>

        {step}
      </div>
      <NavBar goto={goTo} stepStatus={stepStatus} setStepStatus={setStepStatus} currentStepIndex={currentStepIndex} />
    </section>
  );
};

export default Form;
