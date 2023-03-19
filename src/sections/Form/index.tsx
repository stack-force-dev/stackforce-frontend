import React, { useState } from 'react';

import Icon from '../../components/Icon';
import Step from './components/Step';
import NavBar from './components/NavBar';

import { stepsCards } from './config';
import type { StepsData } from './types';

import styles from './styles.m.scss';

const Form = () => {
  const [stepsData, setStepsData] = useState<StepsData>({
    type: null,
    is_adaptive: null,
    state: null,
    start_date: null,
  });
  const [currentStep, setCurrentStep] = useState(0);
  // const reloadStepStatus = (index: number) => {
  //   switch (index) {
  //     case 0:
  //       {
  //         setStepStatus((prev) => {
  //           return {
  //             ...prev,
  //             type: 'active',
  //             is_adaptive: 'unactive',
  //             state: 'unactive',
  //             start_date: 'unactive',
  //           };
  //         });
  //       }
  //       break;
  //     case 1:
  //       {
  //         setStepStatus((prev) => {
  //           return {
  //             ...prev,
  //             is_adaptive: 'active',
  //             state: 'unactive',
  //             start_date: 'unactive',
  //           };
  //         });
  //       }
  //       break;
  //     case 2:
  //       {
  //         setStepStatus((prev) => {
  //           return {
  //             ...prev,
  //             state: 'active',
  //             start_date: 'unactive',
  //           };
  //         });
  //       }
  //       break;
  //     case 3:
  //       {
  //         setStepStatus((prev) => {
  //           return {
  //             ...prev,
  //             start_date: 'active',
  //           };
  //         });
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // //функция для внесения данных в форму
  // const updateFields = (fields: Partial<Inputs>) => {
  //   setData((prev) => {
  //     return { ...prev, ...fields };
  //   });
  // };
  // //функция для перехода на след страницу
  // const next = () => () => {
  //   setCurrentStepIndex((i) => {
  //     if (i >= 4 - 1) return i;
  //     return i + 1;
  //   });
  // };
  // //функция для перехода на пред страницу
  // const back = () => {
  //   reloadStepStatus(currentStepIndex - 1);
  //   setCurrentStepIndex((i) => {
  //     if (i <= 0) return i;
  //     return i - 1;
  //   });
  // };

  // //функция для перехода на опред страницу
  // const goTo = (index: number) => {
  //   setCurrentStepIndex(index);
  //   reloadStepStatus(index);
  // };

  // const stepsArray = [
  //   <Type {...data} updateFields={updateFields} next={next()} setStepStatus={setStepStatus} key="type" />,
  //   <IsAdaptive {...data} updateFields={updateFields} next={next()} setStepStatus={setStepStatus} key="isAdaptive" />,
  //   <State {...data} updateFields={updateFields} next={next()} setStepStatus={setStepStatus} key="state" />,
  //   <StartDate {...data} updateFields={updateFields} next={next()} setStepStatus={setStepStatus} key="startDate" />,
  //   // <Info {...data} updateFields={updateFields} />,
  // ];

  // const step = stepsArray[currentStepIndex];
  // let isLastStep = currentStepIndex === stepsArray.length - 1;

  const step = stepsCards[currentStep];

  const handleChoose = (value: number | boolean) => {
    setStepsData((prev) => ({ ...prev, [step.key]: value }));
    setCurrentStep((i) => {
      if (i >= stepsCards.length - 1) return i;
      return i + 1;
    });
  };

  const handleReturn = () => {
    setCurrentStep((i) => {
      if (i > 0) return i - 1;
      return i;
    });
  };

  return (
    <section className={styles.form} id="section-3">
      <div className={styles.container}>
        <div className={styles.header}>
          {!!currentStep && (
            <div onClick={handleReturn} className={styles.formBack}>
              <Icon name="formBack" />
            </div>
          )}
          <div className={styles.stepsTitle}>
            ШАГ {currentStep + 1} ИЗ {stepsCards.length}
          </div>
          <div className={styles.progressBar}>
            <div
              style={{
                width: currentStep === 0 ? '25%' : currentStep == 1 ? '50%' : currentStep == 2 ? '70%' : '100%',
              }}
            ></div>
          </div>
        </div>

        <Step config={step} handleChoose={handleChoose} />
      </div>
      <NavBar config={stepsCards} currentStep={currentStep} handleChoose={setCurrentStep} />
    </section>
  );
};

export default Form;
