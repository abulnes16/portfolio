import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Loader from "../spinner/Loader";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = e.target.elements;

    if (!name.value || !email.value || !message.value) {
      Swal.fire({
        title: t('contact.invalidData'),
        text: t('contact.fillAllFields'),
        icon: "error",
        confirmButtonColor: "var(--color-secondary)",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      Swal.fire({
        title: t('contact.invalidData'),
        text: t('contact.invalidEmail'),
        icon: "error",
        confirmButtonColor: "var(--color-secondary)",
      });
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_k1j0u3i",
        "template_9y9y9y9",
        form.current,
        "user_9y9y9y9y9y9y9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          Swal.fire({
            title: t('contact.successTitle'),
            text: t('contact.successMessage'),
            icon: "success",
            confirmButtonColor: "var(--color-secondary)",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          Swal.fire({
            title: t('contact.errorTitle'),
            text: t('contact.errorMessage'),
            icon: "error",
            confirmButtonColor: "var(--color-secondary)",
          });
        }
      );
  };

  return (
    <>
      <h2 className="section-title">{t('contact.title')}</h2>
      <div className="contact__container">
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__inputs">
            <input
              type="text"
              name="name"
              placeholder={t('contact.namePlaceholder')}
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder={t('contact.emailPlaceholder')}
              className="input"
            />
          </div>
          <textarea
            name="message"
            rows="7"
            placeholder={t('contact.messagePlaceholder')}
            className="input"
          ></textarea>
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? t('contact.sending') : t('contact.send')}
          </button>
        </form>
        {isLoading && <Loader />}
      </div>
    </>
  );
};

export default ContactForm;
