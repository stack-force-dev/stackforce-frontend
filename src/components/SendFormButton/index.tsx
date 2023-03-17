import React, { useContext } from 'react';
//import { useTranslation } from 'react-i18next';
import l, { LocaleContext, getLocaleTitle, getNextLocale } from '../../utils/Locates/locates';

import styles from './styles.m.scss';

const SendFormButton = () => {
  //const { t } = useTranslation();
  const locale = useContext(LocaleContext);

  return (
    <div className={styles.sendForm}>
      <a href="#a">{l.header.sendForm[locale]}</a>
    </div>
  );
};

export default SendFormButton;
