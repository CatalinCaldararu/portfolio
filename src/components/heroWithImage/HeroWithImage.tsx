import React from "react";
import "./HeroWithImage.css";
import AboutMe from "../about/AboutMe";

const HeroWithImage: React.FC = () => {
  return (
    <section className="hero-with-image">
      <div className="hero-text">
        <AboutMe />
      </div>
      <div className="hero-image">
        <img src="/cover.jpg" alt="Hero Image" />
      </div>
    </section>
  );
};

export default HeroWithImage;
