import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h3>Let's build something together</h3>
      <div className="contact__container">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
