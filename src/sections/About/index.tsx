import classNames from "classnames";
import React, { useEffect, useRef } from "react";

import about from "@root/assets/images/about.png";

import Item from "./Item/Item";
import { aboutData } from "./config";
import styles from "./styles.m.scss";

const About = () => {
  const textTypingDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!textTypingDiv.current) return;
    const textDiv = textTypingDiv.current;
    let timer1, timer2, timer3;
    const textChange = () => {
      timer1 = setTimeout(() => {
        textDiv.textContent = "поддержка проектов";
      }, 0);
      timer2 = setTimeout(() => {
        textDiv.textContent = "разработка с 0";
      }, 4000);
      timer3 = setTimeout(() => {
        textDiv.textContent = "консультация";
      }, 8000);
    };
    textChange();
    const intervalId = setInterval(textChange, 12000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className={styles.about} id="section-2">
      <div className={classNames(styles.content, "container")}>
        <div className={styles.top}>
          <div className={styles.textContent}>
            <div ref={textTypingDiv} className={styles.title}>
              поддержка проектов
            </div>
            <div className={styles.subtitle}>
              для большого <br /> и маленького бизнеса
            </div>
          </div>
          <div className={styles.gif}>
            <img src={about} alt="about" />
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
