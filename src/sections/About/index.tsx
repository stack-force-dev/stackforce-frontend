import classNames from "classnames";
import React from "react";
import { TypeAnimation } from "react-type-animation";

import Item from "./Item/Item";
import { aboutData } from "./config";
import styles from "./styles.m.scss";

const phrases = ["поддержка проектов", 1500, "разработка с нуля", 1500, "консультация", 1500];

const About = () => {
  return (
    <section className={styles.about} id="section-2">
      <div className={classNames(styles.content, "container")}>
        <div className={styles.top}>
          <div className={styles.textContent}>
            <TypeAnimation
              sequence={phrases}
              speed={30}
              deletionSpeed={60}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className={styles.title}
            />
            <div className={styles.subtitle}>
              для большого <br /> и маленького бизнеса
            </div>
          </div>
          <div className={styles.gif}>
            <video className={styles.video} autoPlay muted playsInline loop>
              <source src="https://api.stackforce.ru/static/about.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={styles.bot}>
          {aboutData.map((aboutItem) => (
            <Item key={aboutItem.title} title={aboutItem.title} list={aboutItem.list} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
