import React, { Dispatch, SetStateAction, useEffect } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import SendFormButton from '../SendFormButton';
import d, { useDictionary } from '../../dictionary';
import styles from './styles.m.scss';

interface MenuPropsType {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setActive, active }: MenuPropsType) => {
  const [locale, setNextLocale] = useDictionary();

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActive(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [active]);

  const menuItems = [
    { name: d.menu.main[locale], path: '#' },
    { name: d.menu.about[locale], path: '#' },
    { name: d.menu.technology[locale], path: '#section-3' },
    { name: d.menu.team[locale], path: '#' },
    { name: d.menu.contacts[locale], path: '#' },
  ];

  return (
    <div className={classNames(styles.menu, 'menu', { [styles.active]: active })} onClick={() => setActive(false)}>
      <div className={styles.header}>
        <SendFormButton />
        <div onClick={() => setActive(false)} className={styles.closeBtn}>
          <div className={styles.closeBtnTitle}>{d.menu.close[locale]}</div>
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
        <div onClick={setNextLocale} style={{ color: '#fff' }}>
          lang
        </div>
      </div>
    </div>
  );
};

export default Menu;
