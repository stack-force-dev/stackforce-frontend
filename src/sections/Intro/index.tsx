import React from 'react';
import vid from '../../assets/images/intro.mp4';

import styles from './styles.m.scss';

const Intro = () => {
  return (
    <section>
      <div className={styles.introContainer}>
        <video className={styles.video} autoPlay muted loop>
          <source src={vid} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Intro;
