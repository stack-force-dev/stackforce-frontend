import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import d, { useDictionary } from '../../utils/dictionary';
import Icon from '../Icon';
import Menu from '../Menu';
import SendFormButton from '../SendFormButton';

import Scroll from '../../utils/scroll';

import styles from './styles.m.scss';

const Header = () => {
  const [locale] = useDictionary();
  const [menuActive, setMenuActive] = useState(false);
  const [headerDark, setHeaderDark] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    new Scroll(setHeaderDark).init();
  }, []);

  const handleMenuActive = (active: boolean) => {
    if (active) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    setMenuActive(active);
  };

  return (
    <>
      <header className={classNames(styles.header, { [styles.dark]: headerDark })} ref={ref}>
        <div className={styles.logoContainer}>
          <div className={styles.logoHref}>
            <Icon name="logo" />
            <div className={styles.logoTitle}>{d.header.title[locale]}</div>
          </div>
          <div className={styles.logoSubTitle}>{d.header.subTitle[locale]}</div>
        </div>
        <div className={styles.navContainer}>
          <SendFormButton />
          <div onClick={() => handleMenuActive(true)} className={styles.burgerBtn}>
            <div className={styles.burgerTitle}>{d.header.menu[locale]}</div>
            <Icon name="menu" />
          </div>
        </div>
      </header>
      <Menu active={menuActive} setActive={setMenuActive} />
    </>
  );
};

export default Header;
