import classNames from "classnames";
import React, { useEffect } from "react";

import { Icon } from "../Icon";
import { NotificationProps } from "@root/interfaces/notification";

import styles from "./styles.m.scss";

const Notification = ({ title, description, isError, isActive, toggle }: NotificationProps) => {
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isActive) {
          toggle(false);
        }
      },
      isError ? 2000 : 4000
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [isActive, isError, toggle]);

  const handleClose = () => {
    toggle(false);
  };

  return (
    <div
      onClick={handleClose}
      className={classNames(styles.notificationContainer, { [styles.error]: isError, [styles.active]: isActive })}
    >
      <div className={styles.main}>
        <div className={styles.icon}>
          <Icon name={isError ? "alert" : "success"} />
        </div>
        <div className={styles.body}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      <Icon className={styles.close} name="hide" />
    </div>
  );
};

export default Notification;
