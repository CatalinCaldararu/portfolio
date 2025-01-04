import React from "react";
import styles from "./Services.module.css";
import { data } from "../../../data/constants";
import ServiceCard from "../../shared/serviceCard/ServiceCard";

const ServicesSection: React.FC = () => {
  return (
    <div className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        {data.services.map((service) => ( 
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