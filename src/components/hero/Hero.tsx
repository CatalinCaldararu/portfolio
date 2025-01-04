import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img src="/cover.png" alt="Cover" className="hero-image" />
      <div className="hero-content">
        <h1>Catalin Caldararu</h1>
        <p>Software Developer & Scrum Master</p>
      </div>
    </section>
  );
};

export default Hero;