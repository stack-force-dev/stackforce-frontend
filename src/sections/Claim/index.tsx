import classNames from "classnames";
import React, { useState, useEffect } from "react";

import api from "../../api/serviceForm";
import Icon from "@components/Icon";
import Notification from "@components/Notification";

import type { StepsData, FormData } from "@interfaces/claim";
import type { ChangeNotificationSettings, NotificationSettings } from "@interfaces/notification";

import Form from "./Form";
import Step from "./Step";
import { stepsCards } from "./config";
import styles from "./styles.m.scss";

const Claim = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActiveNoty, toggleNoty] = useState<boolean>(false);
  const [disableTimeout, setDisableTimeout] = useState<number>(0);
  const [notySettings, setNotySettings] = useState<NotificationSettings>({
    title: "",
    description: "",
    isError: false,
  });
  const [stepsData, setStepsData] = useState<StepsData>({
    type: null,
    is_adaptive: null,
    state: null,
    start_date: null,
  });
  const step = stepsCards[currentStep];
  const formActive = currentStep === stepsCards.length;

  useEffect(() => {
    let timeout;

    if (disableTimeout !== 0) {
      timeout = setTimeout(() => {
        setDisableTimeout((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [disableTimeout]);

  const handleChoose = (value: number) => {
    setStepsData((prev) => ({ ...prev, [step.key]: value }));
    setCurrentStep((i) => i + 1);
  };

  const handleReturn = () => {
    setCurrentStep((i) => {
      if (i > 0) return i - 1;
      return i;
    });
  };

  const handleChangeNotySettings = (props: ChangeNotificationSettings) => {
    setNotySettings((prev) => ({ ...prev, ...props }));
  };

  const handleSendData = async (payload: FormData) => {
    try {
      const response = await api.post("/claim", { ...payload, ...stepsData });

      if (String(response?.status).startsWith("2")) {
        handleChangeNotySettings({
          title: "Заявка отправлена",
          description: "Наш менеджер свяжется с вами в ближайшее время",
          isError: false,
        });

        setCurrentStep(0);
      } else {
        handleChangeNotySettings({
          title: "Неизвестная ошибка",
          description: "Попробуйте отправить заявку ещё раз или подождать некоторое время",
          isError: true,
        });

        setDisableTimeout(10);
      }
    } catch {
      handleChangeNotySettings({
        title: "Неизвестная ошибка",
        description: "Попробуйте отправить заявку ещё раз или подождать некоторое время",
        isError: true,
      });

      setDisableTimeout(10);
    }

    toggleNoty(true);
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
    <section className={styles.claim} id="section-6">
      <div className={classNames(styles.container, "container")}>
        <div className={styles.header}>
          <div className={styles.backBtn} onClick={handleReturn}>
            <div className={styles.claimBackContainer}>{!!currentStep && <Icon name="claimBack" />}</div>
            <div className={styles.stepsTitle}>
              ШАГ {currentStep + 1} ИЗ {stepsCards.length + 1}
            </div>
          </div>
          <div className={styles.progressBar}>
            <div style={{ width: `${getProgressBarWidth()}%` }}></div>
          </div>
        </div>
        {!formActive ? (
          <Step config={step} handleChoose={handleChoose} />
        ) : (
          <Form
            handleSendData={handleSendData}
            changeNoty={handleChangeNotySettings}
            toggleNoty={toggleNoty}
            disableTimeout={disableTimeout}
          />
        )}
      </div>
      <Notification
        title={notySettings.title}
        description={notySettings.description}
        isError={notySettings.isError}
        isActive={isActiveNoty}
        toggle={toggleNoty}
      />
    </section>
  );
};

export default Claim;
