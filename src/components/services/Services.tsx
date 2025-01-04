import React from "react";
import styles from "./Services.module.css";
import ServiceCard from "../serviceCard/ServiceCard";
import servicesData from "../../data/servicesData";

const ServicesSection: React.FC = () => {
  return (
    <div className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            readMoreLink={service.readMoreLink}
            gradientClassName={service.gradientClassName}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
