import React from "react";
import styles from "./AboutMe.module.css";
import { DESCRIPTION, HASHTAGS, TITLE } from "../../data/constants";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutMe}>
      <h1 className={styles.title}>{TITLE}</h1>
      <p className={styles.description}>{DESCRIPTION}</p>
      <div className={styles.hashTags}>{HASHTAGS}</div>
    </div>
  );
};

export default AboutMe;