import React, { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import SendFormButton from '../SendFormButton';
import l, { LocaleContext, getLocaleTitle, getNextLocale } from '../../utils/Locates/locates';
import styles from './styles.m.scss';

interface MenuPropsType {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setActive, active }: MenuPropsType) => {
  const locale = useContext(LocaleContext);

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
    { name: l.menu.main[locale], path: '#' },
    { name: l.menu.about[locale], path: '#' },
    { name: l.menu.technology[locale], path: '#section-3' },
    { name: l.menu.team[locale], path: '#' },
    { name: l.menu.contacts[locale], path: '#' },
  ];

  return (
    <div className={classNames(styles.menu, 'menu', { [styles.active]: active })} onClick={() => setActive(false)}>
      <div className={styles.header}>
        <SendFormButton />
        <div onClick={() => setActive(false)} className={styles.closeBtn}>
          <div className={styles.closeBtnTitle}>{l.menu.close[locale]}</div>
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
