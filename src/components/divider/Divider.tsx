import React from 'react';
import styles from './Divider.module.css';

type DividerProps = {
  text?: string;
};

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className={styles.dividerContainer}>
      <h2 className={styles.dividerText}>{text}</h2>
    </div>
  );
};

export default Divider;