import React, { useState } from 'react';
import Menu from '../Menu';
import SendFormButton from '../SendFormButton';
import styles from './styles.m.scss';

const menuItems = [
  { name: 'Главная', path: '#' },
  { name: 'О Компании', path: '#' },
  { name: 'Технологии', path: '#' },
  { name: 'Команда', path: '#' },
  { name: 'Контакты', path: '#' },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_49_160)">
                <g filter="url(#filter0_d_49_160)">
                  <path
                    d="M30 10.8571L16.5 4C10.9377 6.8253 10.9377 14.889 16.5 17.7143L30 10.8571ZM16.5 6.27545L25.5202 10.8571L16.5 8.19825L7.4798 10.8571L16.5 6.27545ZM27.2972 14.6244C28.4111 15.1907 28.4109 16.8058 27.2967 17.3717L16.5 22.8557L3 15.9986L5.70275 14.6244L16.5 20.1101L27.2972 14.6244ZM27.2972 19.7686L30 21.1429L16.5 28L3 21.1429C4.70136 20.2778 6.70441 20.2772 8.4062 21.1415L16.5 25.2515L27.2972 19.7686Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_49_160"
                  x="-1"
                  y="4"
                  width="35"
                  height="32"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_49_160" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_49_160" result="shape" />
                </filter>
                <clipPath id="clip0_49_160">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.logoTitle}>STACKFORCE</div>
          <div className={styles.logoSubTitle}>Аутсорс-компания</div>
        </div>
        <div className={styles.navContainer}>
          <SendFormButton />
          <div onClick={() => setMenuActive(true)} className={styles.burgerBtn}>
            <div className={styles.burgerTitle}>Меню</div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 10.0476C6 9.46904 6.44772 9 7 9H25C25.5523 9 26 9.46904 26 10.0476C26 10.6262 25.5523 11.0952 25 11.0952H7C6.44772 11.0952 6 10.6262 6 10.0476ZM6 16.3333C6 15.7547 6.44772 15.2857 7 15.2857H25C25.5523 15.2857 26 15.7547 26 16.3333C26 16.9119 25.5523 17.381 25 17.381H7C6.44772 17.381 6 16.9119 6 16.3333ZM12 22.619C12 22.0405 12.4477 21.5714 13 21.5714H25C25.5523 21.5714 26 22.0405 26 22.619C26 23.1976 25.5523 23.6667 25 23.6667H13C12.4477 23.6667 12 23.1976 12 22.619Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </header>
      <Menu active={menuActive} setActive={setMenuActive} items={menuItems} />
    </>
  );
};

export default Header;
