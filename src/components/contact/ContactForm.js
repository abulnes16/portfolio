import React, { useState } from "react";
import { sendContactEmail } from "../../modules/emailjs";
import { emailRegex } from "../../constants/regex";
import Swal from "sweetalert2";
import Loader from "../spinner/Loader";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();

    // Empty fields validation
    if (name === "" || email === "" || message === "") {
      Swal.fire(
        "Datos invalidos",
        "Debes llenar todos los campos para enviar un mensaje",
        "error"
      );
      return;
    }

    // Email validation
    const emailReg = new RegExp(emailRegex);
    if (!emailReg.test(email)) {
      Swal.fire(
        "Datos invalidos",
        "El correo no tiene un formato valido",
        "error"
      );
      return;
    }

    setLoading(true);

    try {
      await sendContactEmail(email, name, message);
      await Swal.fire(
        "Mensaje enviado",
        "Pronto nos pondremos en contacto contigo :D",
        "success"
      );
      setEmail("");
      setMessage("");
      setName("");
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Mensaje no enviado",
        "No pudimos enviar tu mensaje :(",
        "error"
      );
    }

    setLoading(false);
  };

  return (
    <form onSubmit={sendMail} className="contact__form">
      <div className="form__inputs">
        <input
          aria-label="name"
          className="input mr-2"
          type="text"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          aria-label="email"
          className="input"
          type="text"
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-textarea">
        <textarea
          className="input"
          aria-label="message"
          name="message"
          id=""
          cols="30"
          rows="5"
          placeholder="Hablame de tu idea"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="d-flex">
        <button type="submit" className="btn btn-lg">
          {loading ? <Loader /> : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
