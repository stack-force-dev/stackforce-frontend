import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Icon from '../Icon';
import Menu from '../Menu';
import SendFormButton from '../SendFormButton';

import styles from './styles.m.scss';

const Header = () => {
  const { t } = useTranslation();
  const [menuActive, setMenuActive] = useState(false);
  const [headerDark, setHeaderDark] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const height = window.innerHeight - ref.current.offsetHeight / 2;
    const darkHeaderScreens = [3, 5];

    window.addEventListener('scroll', () => {
      if (!ref.current) return;

      const currentScroll = window.pageYOffset;
      const screen = Math.ceil(currentScroll / height);

      setHeaderDark(darkHeaderScreens.includes(screen));
    });
  }, []);

  const menuItems = [
    { name: t('menu.main'), path: '#' },
    { name: t('menu.about'), path: '#' },
    { name: t('menu.tehnology'), path: '#' },
    { name: t('menu.team'), path: '#' },
    { name: t('menu.contacts'), path: '#' },
  ];

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
          <Icon name="logo" />
          <div className={styles.logoTitle}>{t('title.orgName')}</div>
          <div className={styles.logoSubTitle}>{t('title.outsource')}</div>
        </div>
        <div className={styles.navContainer}>
          <SendFormButton />
          <div onClick={() => handleMenuActive(true)} className={styles.burgerBtn}>
            <div className={styles.burgerTitle}>{t('menu.title')}</div>
            <Icon name="menu" />
          </div>
        </div>
      </header>
      <Menu active={menuActive} setActive={handleMenuActive} items={menuItems} />
    </>
  );
};

export default Header;
