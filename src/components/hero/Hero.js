import React from "react";
import SocialMedia from "../social-media/SocialMedia";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__img-container">
        <img
          className="hero__img"
          src="assets/img/hero.webp"
          alt="Angel Bulnes - Software Engineer"
        />
      </div>
      <div className="hero__greeting">
        <h1>Hello, I'm Angel <span role="img" aria-label="wave">👋</span></h1>
        <div className="job">Software Engineer & AI Engineer</div>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--color-text-muted)' }}>
          I specialize in building high-performance mobile applications and integrating intelligent AI solutions to solve real-world problems.
        </p>
      </div>

      <div className="social-media-container">
        <SocialMedia />
      </div>

      <div style={{ marginTop: '3rem' }}>
        <a href="#projects" className="btn">View My Work</a>
        <a href="#contact" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
