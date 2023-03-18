import React from 'react';
import d, { useDictionary } from '../../utils/dictionary';

import styles from './styles.m.scss';

const SendFormButton = () => {
  const [locale] = useDictionary();

  return (
    <div className={styles.sendForm}>
      <a href="#a">{d.header.sendForm[locale]}</a>
    </div>
  );
};

export default SendFormButton;
