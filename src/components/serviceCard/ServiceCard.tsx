import React from "react";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  readMoreLink?: string;
  gradientClassName: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  readMoreLink,
  gradientClassName,
}) => {
  return (
    <div className={`${styles.serviceCard} ${styles[gradientClassName]}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <a href={readMoreLink} className={styles.readMore}>Read more</a> */}
    </div>
  );
};

export default ServiceCard;
