import React from "react";
import SocialMedia from "../social-media/SocialMedia";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <figure className="hero__img-container">
        <img
          width="80"
          className="hero__img"
          src="assets/img/angel-min-crop.jpg"
          alt="Desarrollador"
        />
      </figure>
      <div className="hero__greeting">
        <h1>Hola, mi nombre es Angel 👋</h1>
        <p className="job">Frontend Developer</p>
      </div>

      <div className="social-media-container">
        <SocialMedia/>
      </div>
    </section>
  );
};

export default Hero;
