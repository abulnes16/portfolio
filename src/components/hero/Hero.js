import React from "react";
import SocialMedia from "../social-media/SocialMedia";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

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
        <h1>{t('hero.greeting')} <span role="img" aria-label="wave">👋</span></h1>
        <div className="job">{t('hero.job')}</div>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--color-text-muted)' }}>
          {t('hero.description')}
        </p>
      </div>

      <div className="social-media-container">
        <SocialMedia />
      </div>

      <div style={{ marginTop: '3rem' }}>
        <a href="#projects" className="btn">{t('hero.viewWork')}</a>
        <a href="#contact" className="btn btn-outline" style={{ marginLeft: '1rem' }}>{t('hero.contactMe')}</a>
      </div>
    </section>
  );
};

export default Hero;
