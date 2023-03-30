import React from "react";

import { Member } from "@root/interfaces/team";

import styles from "./styles.m.scss";

const Card = (props: Member) => {
  const { name, code, post, image, skills } = props;
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.avatarContainer}>
          <img className={styles.avatar} src={image} alt={name} data-hover="2" />
        </div>
        <div className={styles.title}>
          <div className={styles.name}>{name}</div>
          <div className={styles.post}>{post}</div>
        </div>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <div className={styles.skill} key={`${code}_${skill}`}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
