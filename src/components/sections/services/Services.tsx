import React from "react";
import styles from "./Services.module.css";
import { data } from "../../../data/constants";
import Card from "../../shared/card/Card";

const ServicesSection: React.FC = () => {
  return (
    <div className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        {data.services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            content={<p>{service.description}</p>}
            gradient={service.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;