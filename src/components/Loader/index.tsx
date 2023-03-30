import React, { useEffect, useRef } from "react";

import styles from "./styles.m.scss";

const Loader = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout;

    window.onload = () => {
      timeout = setTimeout(() => {
        if (ref.current) ref.current.style.display = "none";
      }, 1600);
    };

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <div ref={ref} className={styles.loading}></div>;
};

export default Loader;
