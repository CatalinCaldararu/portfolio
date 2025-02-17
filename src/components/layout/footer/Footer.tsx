import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faGitlab, faMedium, faGoogle } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";
import {data} from "../../../data/constants";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a href={data.socialLinks.gmail} className={styles.link}>
        <FontAwesomeIcon icon={faGoogle} /> Gmail
      </a>
      <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
      {/* <a href={socialLinks.gitlab} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <FontAwesomeIcon icon={faGitlab} /> GitLab
      </a>
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
      <a href={socialLinks.medium} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <FontAwesomeIcon icon={faMedium} /> Medium
      </a> */}
    </footer>
  );
};

export default Footer;