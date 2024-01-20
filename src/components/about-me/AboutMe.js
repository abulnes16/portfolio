import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <figure className="about-me__img">
        <img src="assets/img/about-me.webp" alt="Acerca de mi" />
      </figure>
      <div className="about-me__description">
        <span>
          My name is Angel Bulnes, I am a Software Engineer, passionate about
          programming and learning new things. I like to share the
          knowledge and create communities so that other people can enter
          to the world of technology.
          <br />
          <br />
         I'm a Software Engineer with 5 years of experience, specialized in Mobile Development. I have experience
         with React Native with JS & TS. Also I have experience building native apps with Android & iOS. 
         Currently I'm studying native development with Jetpack Compose and Swift UI. 
         I like to teach to other development good coding practices and I mentored different developers to 
         reach their goals.
        </span>
        <p>Do you want us to work together?</p>
        <div className="d-flex">
          <a href="#contact" className="btn btn-lg">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
