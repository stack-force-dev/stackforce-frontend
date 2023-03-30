import classNames from "classnames";
import React, { Dispatch, SetStateAction, useEffect } from "react";

import Icon from "@components/Icon";
import { routes } from "@root/config";
import d, { useDictionary } from "@utils/dictionary";

import { menuData } from "./config";
import styles from "./styles.m.scss";

interface MenuPropsType {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setActive, active }: MenuPropsType) => {
  const [locale] = useDictionary();

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [active, setActive]);

  return (
    <div
      className={classNames(styles.menu, "ignore-scroll", { [styles.active]: active })}
      onClick={() => setActive(false)}
    >
      <div className={styles.header}>
        {/* <div onClick={setNextLocale} style={{ color: "#fff" }}>
          En
        </div> */}
        <div onClick={() => setActive(false)} className={styles.closeBtn}>
          <div className={styles.closeBtnTitle}>{d.menu.close[locale]}</div>
          <Icon name="close" width="32px" height="32px" />
        </div>
      </div>
      <div className={classNames(styles.menuContent, "ignore-scroll")}>
        <ul>
          {routes(locale).map((item, index) => (
            <li key={item.name} data-text={item.name.toUpperCase()} data-section-link={index + 1}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className={styles.contacts}>
          {menuData.contacts.map((contact) => (
            <div key={contact.iconName} className={styles.contactWrapper}>
              <div className={styles.contactLogo}>
                <Icon name={contact.iconName} />
              </div>
              <a href={contact.href} className={styles.contactInfo}>
                {contact.info}
              </a>
            </div>
          ))}
        </div>
        <div className={styles.socialNetworkWrapper}>
          {menuData.socialNetwork.map((item) => (
            <a key={item.iconName} className={styles.socialNetworkItem} href={item.href}>
              <Icon name={item.iconName} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
