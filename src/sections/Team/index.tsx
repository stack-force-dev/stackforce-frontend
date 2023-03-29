import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

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
      gsap.to(cursor, 0.2, {
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
  const renderTitle = () => (
    <div className={styles.title}>
      <h1 className={styles.head}>Наша команда</h1>
      <span className={styles.description}>
        В частности, внедрение современных методик <br /> позволяет выполнить важные задания <br /> по разработке как
        самодостаточных.
      </span>
    </div>
  );
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={styles.team} id="section-3">
      <div className="container">
        <div className={styles.cursor}>
          <div className={styles.cursorCircle} ref={ref}>
            <svg height="64" width="64">
              <circle cx="32" cy="32" r="32"></circle>
            </svg>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.desktop}>
            {renderTitle()}
            {teamList.map((item) => (
              <Card {...item} key={`desktop_${item.code}`} />
            ))}
          </div>
          <div className={styles.mobile}>
            {renderTitle()}
            <Slider {...settings}>
              {teamList
                .sort(() => Math.random() - 0.5)
                .map((item) => (
                  <Card {...item} key={`mobile_${item.code}`} />
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
