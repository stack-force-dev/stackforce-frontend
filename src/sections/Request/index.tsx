import React, { useState } from "react";

import api from "../../api/serviceForm";
import Icon from "@components/Icon";

import type { StepsData, FormData } from "@interfaces/request";

import Form from "./Form";
import Step from "./Step";
import { stepsCards } from "./config";
import styles from "./styles.m.scss";

const Request = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsData, setStepsData] = useState<StepsData>({
    type: null,
    is_adaptive: null,
    state: null,
    start_date: null,
  });

  const step = stepsCards[currentStep];
  const formActive = currentStep === stepsCards.length;

  const handleChoose = (value: number | boolean) => {
    setStepsData((prev) => ({ ...prev, [step.key]: value }));
    setCurrentStep((i) => i + 1);
  };

  const handleReturn = () => {
    setCurrentStep((i) => {
      if (i > 0) return i - 1;
      return i;
    });
  };

  const handleSendData = (payload: FormData) => {
    api.post("/claim", { ...payload, ...stepsData });
  };

  const getProgressBarWidth = () => {
    switch (currentStep) {
      case 4:
        return 100;
      case 3:
        return 80;
      case 2:
        return 60;
      case 1:
        return 40;
      default:
        return 20;
    }
  };

  return (
    <section className={styles.request} id="section-3">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.requestBackContainer}>
            {!!currentStep && (
              <div onClick={handleReturn} className={styles.requestBack}>
                <Icon name="requestBack" />
              </div>
            )}
          </div>
          <div className={styles.stepsTitle}>
            ШАГ {currentStep + 1} ИЗ {stepsCards.length + 1}
          </div>
          <div className={styles.progressBar}>
            <div style={{ width: `${getProgressBarWidth()}%` }}></div>
          </div>
        </div>
        {!formActive ? <Step config={step} handleChoose={handleChoose} /> : <Form handleSendData={handleSendData} />}
      </div>
    </section>
  );
};

export default Request;
