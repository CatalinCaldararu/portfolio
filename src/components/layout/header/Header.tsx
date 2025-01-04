import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.text}>Catalin Caldararu</h1>
      <p className={styles.text}>Software Developer & Scrum Master</p>
    </div>
  );
};

export default Header;
