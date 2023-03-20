import classNames from "classnames";
import React, { Dispatch, SetStateAction, useEffect } from "react";

import Icon from "@components/Icon";
import SendFormButton from "@components/SendFormButton";
import { routes } from "@root/config";
import d, { useDictionary } from "@utils/dictionary";

import styles from "./styles.m.scss";

interface MenuPropsType {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setActive, active }: MenuPropsType) => {
  const [locale, setNextLocale] = useDictionary();

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [active]);

  return (
    <div
      className={classNames(styles.menu, "ignore-scroll", { [styles.active]: active })}
      onClick={() => setActive(false)}
    >
      <div className={styles.header}>
        <SendFormButton />
        <div onClick={() => setActive(false)} className={styles.closeBtn}>
          <div className={styles.closeBtnTitle}>{d.menu.close[locale]}</div>
          <Icon name="close" />
        </div>
      </div>
      <div className={classNames(styles.menuContent, "ignore-scroll")}>
        <ul>
          {routes(locale).map((item, index) => (
            <li key={item.name} data-text={item.name.toUpperCase()} data-section={index + 1} className={"route-link"}>
              {item.name}
            </li>
          ))}
        </ul>
        <div onClick={setNextLocale} style={{ color: "#fff" }}>
          lang
        </div>
      </div>
    </div>
  );
};

export default Menu;
