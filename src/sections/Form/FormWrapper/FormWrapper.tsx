import React from 'react';
import { ReactNode } from 'react';

import styles from './styles.m.scss';

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.form}>{children}</div>
    </>
  );
};

export default FormWrapper;
