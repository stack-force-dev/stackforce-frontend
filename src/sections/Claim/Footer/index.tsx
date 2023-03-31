import React from "react";

import styles from "./styles.m.scss";
import { menuData } from "@root/components/Menu/config";
import Icon from "@root/components/Icon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>© 2023 Stack Force. Все права защищены</div>
      <div className={styles.contactsWrapper}>
        <div className={styles.contacts}>
          {menuData.contacts.map((contact) => (
            <a key={contact.href} href={contact.href} target="_blank" className={styles.contactInfo} rel="noreferrer">
              {contact.info}
            </a>
          ))}
        </div>
        <div className={styles.socialNetwork}>
          {menuData.socialNetwork.map((item) => (
            <a
              key={item.iconName}
              target="_blank"
              className={styles.socialNetworkItem}
              href={item.href}
              rel="noreferrer"
            >
              <Icon name={item.iconName} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
