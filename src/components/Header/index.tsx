import React, { useState, RefObject } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Icon from '../Icon';
import Menu from '../Menu';
import SendFormButton from '../SendFormButton';

import styles from './styles.m.scss';

interface HeaderProps {
  headerRef: RefObject<HTMLElement>;
  dark: boolean;
}

const Header = ({ headerRef, dark }: HeaderProps) => {
  const { t } = useTranslation();
  const [menuActive, setMenuActive] = useState(false);

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
      <header className={classNames(styles.header, { [styles.dark]: dark })} ref={headerRef}>
        <div className={styles.logoContainer}>
          <a href="#intro">
            <Icon name="logo" />
          </a>
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
      <Menu active={menuActive} setActive={handleMenuActive} />
    </>
  );
};

export default Header;
