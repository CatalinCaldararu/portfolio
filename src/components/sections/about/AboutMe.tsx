import React from "react";
import styles from "./AboutMe.module.css";
import { data } from "../../../data/constants";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutMe}>
      <h1 className={styles.title}>{data.profile.title}</h1>
      <p className={styles.description}>{data.profile.description}</p>
      <div className={styles.hashTags}>{data.profile.hashtags}</div>
    </div>
  );
};

export default AboutMe;