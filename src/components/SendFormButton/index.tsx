import React from 'react';
import classNames from 'classnames';
import d, { useDictionary } from '@utils/dictionary';

import styles from './styles.m.scss';

const SendFormButton = () => {
  const [locale] = useDictionary();

  return (
    <div className={classNames(styles.sendForm, 'route-link')} data-section={3}>
      {d.header.sendForm[locale]}
    </div>
  );
};

export default SendFormButton;
