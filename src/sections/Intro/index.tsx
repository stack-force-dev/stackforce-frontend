import React, { useContext } from 'react';
import Tilt from 'react-parallax-tilt';
import l, { LocaleContext, getLocaleTitle, getNextLocale } from '../../utils/Locates/locates';

import styles from './styles.m.scss';

const Intro = () => {
  const locale = useContext(LocaleContext);
  return (
    <section className={styles.intro} id="section-1">
      <div className={styles.introContainer}>
        <video className={styles.video} autoPlay muted playsInline loop>
          <source src="https://api.stackforce.ru/static/intro.mp4" type="video/mp4" />
        </video>
      </div>
      <Tilt className={styles.titleContainer} perspective={5000} gyroscope={true} tiltReverse>
        <div className={styles.title}>
          <h1 className={styles.h1Desktop}>{l.header.title[locale]}</h1>
          <h1 className={styles.h1Mobile}>
            {l.intro.title[locale]}
            <br />
            {l.intro.subTitle[locale]}
          </h1>
          <h3>{l.intro.webTitle[locale]}</h3>
        </div>
      </Tilt>
    </section>
  );
};

export default Intro;
