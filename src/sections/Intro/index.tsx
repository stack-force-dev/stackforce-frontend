import React from 'react';
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';

import styles from './styles.m.scss';

const Intro = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className={styles.introContainer}>
        <video className={styles.video} autoPlay muted playsInline>
          <source src="https://dev.stackforce.ru/intro.mp4" type="video/mp4" />
        </video>
      </div>
      <Tilt className={styles.titleContainer} perspective={5000} gyroscope={true} tiltReverse>
        <div className={styles.title}>
          <h1 className={styles.h1Desktop}>{t('title.orgName')}</h1>
          <h1 className={styles.h1Mobile}>
            {t('title.stack')}
            <br />
            {t('title.force')}
          </h1>
          <h3>{t('title.team')}</h3>
        </div>
      </Tilt>
    </section>
  );
};

export default Intro;
