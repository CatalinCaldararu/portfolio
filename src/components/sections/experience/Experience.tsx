import React from "react";
import styles from "./Experience.module.css";

type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
};

const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  period,
  location,
  description,
  bulletPoints,
  skills,
}) => (
  <div className={styles.experience}>
    <div className={styles.header}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.details}>
        <span className={styles.company}>{company}</span>
        <span className={styles.period}>{period}</span>
        <span className={styles.location}>{location}</span>
      </div>
    </div>
    <p className={styles.description}>{description}</p>
    <ul className={styles.bulletPoints}>
      {bulletPoints.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    <div className={styles.skills}>
      {skills.map((skill, index) => (
        <span key={index} className={styles.skill}>
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Experience;