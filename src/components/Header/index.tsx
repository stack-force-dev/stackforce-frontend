import classNames from "classnames";
import React, { useState, useEffect } from "react";

import Icon from "@components/Icon";
import Menu from "@components/Menu";
import SendFormButton from "@components/SendFormButton";
import d, { useDictionary } from "@utils/dictionary";
import Scroll from "@utils/scroll";

import styles from "./styles.m.scss";

const Header = () => {
  const [locale] = useDictionary();
  const [menuActive, setMenuActive] = useState(false);
  const [headerDark, setHeaderDark] = useState(false);

  useEffect(() => {
    new Scroll(setHeaderDark).init();
  }, []);

  const handleMenuActive = (active: boolean) => {
    const html = document.querySelector("html");
    const { body } = document;

    if (active) {
      html?.classList.add("no-scroll");
      body.classList.add("no-scroll");
    } else {
      html?.classList.remove("no-scroll");
      body.classList.remove("no-scroll");
    }

    setMenuActive(active);
  };

  return (
    <>
      <header className={classNames(styles.header, { [styles.dark]: headerDark })}>
        <div className={styles.logoContainer}>
          <div className={styles.logoHref}>
            <li className="route-link" data-section-link={1}>
              <Icon name="logo" />
            </li>
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
      <Menu active={menuActive} setActive={handleMenuActive} />
    </>
  );
};

export default Header;
