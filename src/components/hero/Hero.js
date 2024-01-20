import React from "react";
import SocialMedia from "../social-media/SocialMedia";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <figure className="hero__img-container">
        <img
          width="80"
          className="hero__img"
          src="assets/img/hero.webp"
          alt="Developer"
        />
      </figure>
      <div className="hero__greeting">
        <h1>Hi, my name is Angel 👋</h1>
        <p className="job">Software Engineer</p>
      </div>

      <div className="social-media-container">
        <SocialMedia />
      </div>
    </section>
  );
};

export default Hero;
