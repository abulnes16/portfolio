import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-me">
      <div className="about-me__container">
        <div className="about-me__img-container">
          <img
            src="assets/img/about-me.webp"
            alt="About Me"
            className="about-me__img"
          />
        </div>
        <div className="about-me__info">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="about-me__description">
            <span>{t('about.p1')}</span>
            <br /><br />
            <span>{t('about.p2')}</span>
            <br /><br />
            <span>{t('about.p3')}</span>
          </p>
          <a href="#contact" className="btn about-me__btn">
            {t('about.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
