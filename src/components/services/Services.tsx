import React from "react";
import styles from "./Services.module.css";
import ServiceCard from "../serviceCard/ServiceCard";
import { portfolioData } from "../../data/constants";

const ServicesSection: React.FC = () => {
  return (
    <div className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        {portfolioData.services.map((service) => ( 
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            gradientClassName={service.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;