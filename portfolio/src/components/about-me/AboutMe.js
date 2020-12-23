import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <figure className="about-me__img">
        <img src="assets/img/about-me.jpg" alt="Acerca de mi" />
      </figure>
      <div className="about-me__description">
        <span>
          Mi nombre es Angel Bulnes, soy ingeniero en sistemas y estudiante de
          matemáticas, apasionado por la programación y aprender cosas nuevas.
          Me gustan los videojuegos, el voleibol y charlar sobre tecnología.
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
