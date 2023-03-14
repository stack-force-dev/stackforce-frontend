import React from 'react';
import vid from '../../assets/images/intro.mp4';
import './styles.scss';

const Intro = () => {
  return (
    <div className="intro-container">
      <video autoPlay muted loop>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
