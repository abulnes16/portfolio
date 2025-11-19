import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="container about-me__container">
        <div className="about-me__img">
          <img src="assets/img/about-me.webp" alt="Angel Bulnes" />
        </div>
        <div className="about-me__description">
          <h2>About Me</h2>
          <p>
            My name is Angel Bulnes, I am a Software Engineer passionate about
            programming and learning new things. I love sharing knowledge and
            building communities to help others enter the world of technology.
          </p>
          <p>
            I have 5 years of experience, specialized in Mobile Development.
            I have extensive experience with React Native (JS & TS) and building
            native apps for Android & iOS. Currently, I'm expanding my skills
            with Jetpack Compose and SwiftUI.
          </p>
          <p>
            I enjoy teaching good coding practices and mentoring developers to help
            them reach their goals.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="#contact" className="btn">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
