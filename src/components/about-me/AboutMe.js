import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <figure className="about-me__img">
        <img src="assets/img/about-me.webp" alt="Acerca de mi" />
      </figure>
      <div className="about-me__description">
        <span>
          Mi nombre es Angel Bulnes, soy ingeniero en sistemas, apasionado por
          la programación y aprender cosas nuevas. Me gusta compartir el
          conocimiento y crear comunidades para que otras personas puedan entrar
          al mundo de la tecnología
          <br />
          <br />
          Soy desarrollador de software con experiencia en el desarrollo de
          aplicaciones moviles bridge con React Native y aplicaciones web con
          ReactJS. Actualmente estoy aprendiendo sobre desarrollo nativo con
          Android e iOS.
        </span>
        <p>¿Quieres que trabajemos juntos?</p>
        <div className="d-flex">
          <a href="#contact" className="btn btn-lg">
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
