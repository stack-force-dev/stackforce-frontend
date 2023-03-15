import React, { Dispatch, SetStateAction } from 'react';
import SendFormButton from '../SendFormButton';
import styles from './styles.m.scss';

type menuItem = {
  name: string;
  path: string;
};

interface MenuPropsType {
  items: menuItem[];
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ items, setActive, active }: MenuPropsType) => {
  return (
    <div className={active ? `${styles.menu} ${styles.active}` : styles.menu}>
      <div className={styles.header}>
        <SendFormButton />
        <div onClick={() => setActive(false)} className={styles.closeBtn}>
          <div className={styles.closeBtnTitle}>Закрыть</div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.29289 9.29289C9.68342 8.90237 10.3166 8.90237 10.7071 9.29289L16 14.5858L21.2929 9.29289C21.6834 8.90237 22.3166 8.90237 22.7071 9.29289C23.0976 9.68342 23.0976 10.3166 22.7071 10.7071L17.4142 16L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L16 17.4142L10.7071 22.7071C10.3166 23.0976 9.68342 23.0976 9.29289 22.7071C8.90237 22.3166 8.90237 21.6834 9.29289 21.2929L14.5858 16L9.29289 10.7071C8.90237 10.3166 8.90237 9.68342 9.29289 9.29289Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={styles.menuContent}>
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <a data-text={item.name} href={item.path}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
