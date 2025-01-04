import React from "react";
import styles from "./AboutMe.module.css";
import { portfolioData } from "../../data/constants";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutMe}>
      <h1 className={styles.title}>{portfolioData.profile.title}</h1>
      <p className={styles.description}>{portfolioData.profile.description}</p>
      <div className={styles.hashTags}>{portfolioData.profile.hashtags}</div>
    </div>
  );
};

export default AboutMe;