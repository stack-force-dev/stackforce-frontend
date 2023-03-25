import classNames from "classnames";
import React from "react";

import styles from "./styles.m.scss";

const Summary = () => {
  return (
    <section className={styles.summary} id="section-2">
      <div className={classNames(styles.content, "container")}>
        <div className={styles.contentTitle}>
          We design and develop exceptional digital products & services, eCommerce, and brand communication solutions.
        </div>
        <div className={styles.contentItems}>
          <div className={styles.item}>
            <div className={styles.itemId}>
              <div className={styles.id}>01</div>
              <div className={styles.minus}></div>
            </div>
            <div className={styles.itemContainer}>
              <div className={styles.itemTitle}>
                Product
                <>
                  <br />
                </>
                Engineering
              </div>
              <div className={styles.itemContent}>
                Lorem ipsum dolor sit amet consectetur. Aliquam vel enim a imperdiet neque. Purus dui a nam enim
                ultrices.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemId}>
              <div className={styles.id}>02</div>
              <div className={styles.minus}></div>
            </div>
            <div className={styles.itemContainer}>
              <div className={styles.itemTitle}>
                UX/UI
                <>
                  <br />
                </>
                Strategy
              </div>
              <div className={styles.itemContent}>
                Lorem ipsum dolor sit amet consectetur. Aliquam vel enim a imperdiet neque. Purus dui a nam enim
                ultrices.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemId}>
              <div className={styles.id}>03</div>
              <div className={styles.minus}></div>
            </div>
            <div className={styles.itemContainer}>
              <div className={styles.itemTitle}>
                Big Data
                <>
                  <br />
                </>
                & Analytics
              </div>
              <div className={styles.itemContent}>
                Lorem ipsum dolor sit amet consectetur. Aliquam vel enim a imperdiet neque. Purus dui a nam enim
                ultrices.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemId}>
              <div className={styles.id}>03</div>
              <div className={styles.minus}></div>
            </div>
            <div className={styles.itemContainer}>
              <div className={styles.itemTitle}>
                Big Data
                <>
                  <br />
                </>
                & Analytics
              </div>
              <div className={styles.itemContent}>
                Lorem ipsum dolor sit amet consectetur. Aliquam vel enim a imperdiet neque. Purus dui a nam enim
                ultrices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
