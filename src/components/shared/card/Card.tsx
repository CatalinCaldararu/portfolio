import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  content: React.ReactNode;
  gradient: string;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  gradient,
  className,
  onClick,
}) => {
  return (
    <div 
      className={`${styles.card} ${styles[gradient]} ${className || ''}`}
      onClick={onClick}
    >
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardContent}>{content}</div>
    </div>
  );
};

export default React.memo(Card);