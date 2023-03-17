import React, { useState, useEffect, useRef, useContext } from 'react';
import classNames from 'classnames';
import l, { LocaleContext, getLocaleTitle, getNextLocale } from '../../utils/Locates/locates';
import Icon from '../Icon';
import Menu from '../Menu';
import SendFormButton from '../SendFormButton';

import styles from './styles.m.scss';

const DARK_HEADER_SCREENS = [3];

const scrollToTarget = function (target, screen, down, setHeaderDark) {
  const start = window.pageYOffset;
  const top = target.getBoundingClientRect().top;

  const duration = 500;

  let startTime = 0;
  let requestId;

  const loop = (currentTime) => {
    if (!startTime) startTime = currentTime;

    const time = currentTime - startTime;

    const percent = Math.min(time / duration, 1);
    window.scrollTo(0, start + top * percent);

    if (time < duration) {
      requestId = window.requestAnimationFrame(loop);
    } else {
      window.cancelAnimationFrame(requestId);
      if (down) setHeaderDark(DARK_HEADER_SCREENS.includes(screen));
    }
  };

  if (!down) setHeaderDark(DARK_HEADER_SCREENS.includes(screen));

  requestId = window.requestAnimationFrame(loop);
};

const Header = () => {
  const locale = useContext(LocaleContext);
  const [menuActive, setMenuActive] = useState(false);
  const [headerDark, setHeaderDark] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let lastScroll = 0;
    let scrolling = false;
    let lastSrc = null;
    let lastTouch = 0;

    const scrollListener = (down, src) => {
      if (!ref.current || scrolling || src === lastSrc || src.classList.contains('menu')) return;

      scrolling = true;

      const currentScroll = window.pageYOffset + 1;
      const screen = Math.ceil(currentScroll / window.innerHeight) || 1;
      const newScreen = down ? screen + 1 : screen - 1;

      const section = document.querySelector(`#section-${newScreen}`);
      if (!section) {
        scrolling = false;
        return;
      }

      scrollToTarget(section, newScreen, down, setHeaderDark);

      setTimeout(() => {
        scrolling = false;
      }, 1000);

      lastScroll = currentScroll;
      lastSrc = src;
    };

    window.addEventListener('touchstart', (e) => (lastTouch = e.touches[0].pageY));
    window.addEventListener('touchmove', (e) => scrollListener(lastTouch - e.touches[0].pageY > 0, e.target));
    window.addEventListener('wheel', (e) => scrollListener(e.deltaY > 0, e.target));
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
          <Icon name="logo" />
          <div className={styles.logoTitle}>{l.header.title[locale]}</div>
          <div className={styles.logoSubTitle}>{l.header.subTitle[locale]}</div>
        </div>
        <div className={styles.navContainer}>
          <SendFormButton />
          <div onClick={() => handleMenuActive(true)} className={styles.burgerBtn}>
            <div className={styles.burgerTitle}>{l.header.menu[locale]}</div>
            <Icon name="menu" />
          </div>
        </div>
      </header>
      <Menu active={menuActive} setActive={handleMenuActive} />
    </>
  );
};

export default Header;
