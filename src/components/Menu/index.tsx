import React, { Dispatch, SetStateAction, useEffect } from 'react';
import Icon from '../Icon';
import SendFormButton from '../SendFormButton';
import { useTranslation } from 'react-i18next';
import styles from './styles.m.scss';

interface MenuPropsType {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setActive, active }: MenuPropsType) => {
  const { t } = useTranslation();

  const menuItems = [
    { name: t('menu.main'), path: '#intro' },
    { name: t('menu.about'), path: '#summary' },
    { name: t('menu.tehnology'), path: '#form' },
    { name: t('menu.team'), path: '#' },
    { name: t('menu.contacts'), path: '#' },
  ];

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActive(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [active]);

  return (
    <div className={active ? `${styles.menu} ${styles.active}` : styles.menu} onClick={() => setActive(false)}>
      <div className={styles.header}>
        <SendFormButton />
        <div onClick={() => setActive(false)} className={styles.closeBtn}>
          <div className={styles.closeBtnTitle}>{t('menu.close')}</div>
          <Icon name="close" />
        </div>
      </div>
      <div className={styles.menuContent}>
        <ul>
          {menuItems.map((item) => (
            <li data-text={item.name.toUpperCase()} key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
