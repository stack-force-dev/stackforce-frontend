import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.m.scss';

const SendFormButton = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.sendForm}>
      <a href="#a">{t('menu.sendForm')}</a>
    </div>
  );
};

export default SendFormButton;
