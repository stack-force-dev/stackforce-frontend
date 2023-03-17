import React, { useContext } from 'react';
import l, { LocaleContext, getLocaleTitle, getNextLocale } from '../../utils/Locates/locates';

import styles from './styles.m.scss';

const SendFormButton = () => {
  const locale = useContext(LocaleContext);

  return (
    <div className={styles.sendForm}>
      <a href="#a">{l.header.sendForm[locale]}</a>
    </div>
  );
};

export default SendFormButton;
