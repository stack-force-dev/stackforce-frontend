import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";

import Card from "./Card";
import teamList from "./config";
import styles from "./styles.m.scss";

const Team = () => {
  const ref = useRef(null);
  useEffect(() => {
    const cursor = ref.current;
    const images = document.querySelectorAll("*[data-hover='2']");
    if (!cursor) return;

    const onMouseMove = (e) => {
      gsap.to(cursor, 0.4, {
        x: e.clientX - 32,
        y: e.clientY - 32,
      });
    };
    const onMouseHover = () => {
      gsap.to(cursor, 0.4, {
        scale: 2,
      });
    };
    const onMouseHoverOut = () => {
      gsap.to(cursor, 0.4, {
        scale: 1,
      });
    };
    images.forEach((item) => {
      item.addEventListener("mouseenter", onMouseHover);
      item.addEventListener("mouseleave", onMouseHoverOut);
    });
    document.body.addEventListener("mousemove", onMouseMove);
  }, []);
  return (
    <section className={styles.team} id="section-4">
      <div className={styles.cursor}>
        <div className={styles.cursorCircle} ref={ref}>
          <svg height="64" width="64">
            <circle cx="32" cy="32" r="32"></circle>
          </svg>
        </div>
      </div>
      <h1 className={styles.title}>Наша команда</h1>
      <div className={styles.container}>
        <div className={styles.desktop}>
          {teamList.map((item) => (
            <Card {...item} key={`desktop_${item.code}`} />
          ))}
        </div>
        <div className={styles.mobile}>
          <Carousel showArrows={false} autoPlay interval={3000} infiniteLoop showStatus={false} showThumbs={false}>
            {teamList
              .sort(() => Math.random() - 0.5)
              .map((item) => (
                <Card {...item} key={`mobile_${item.code}`} />
              ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Team;
