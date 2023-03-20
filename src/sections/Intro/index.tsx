import React from "react";
import Tilt from "react-parallax-tilt";

import Loader from "@components/Loader";
import d, { useDictionary } from "@utils/dictionary";

import styles from "./styles.m.scss";

const Intro = () => {
  const [locale] = useDictionary();

  return (
    <section className={styles.intro} id="section-1">
      <Loader />
      <div className={styles.introContainer}>
        <video className={styles.video} autoPlay muted playsInline loop>
          <source src="https://api.stackforce.ru/static/intro.mp4" type="video/mp4" />
        </video>
      </div>
      <Tilt className={styles.titleContainer} perspective={5000} gyroscope={true} tiltReverse>
        <div className={styles.title}>
          <h1 className={styles.h1Desktop}>{d.header.title[locale]}</h1>
          <h1 className={styles.h1Mobile}>
            {d.intro.title[locale]}
            <br />
            {d.intro.subTitle[locale]}
          </h1>
          <h3>{d.intro.webTitle[locale]}</h3>
        </div>
      </Tilt>
    </section>
  );
};

export default Intro;
