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
        "Invalid Data",
        "You have to fill all the fields",
        "error"
      );
      return;
    }

    // Email validation
    const emailReg = new RegExp(emailRegex);
    if (!emailReg.test(email)) {
      Swal.fire(
        "Invalid Data",
        "The email format is incorrect",
        "error"
      );
      return;
    }

    setLoading(true);

    try {
      await sendContactEmail(email, name, message);
      await Swal.fire(
        "Email Sent",
        "Soon we'll be in touch with you :D",
        "success"
      );
      setEmail("");
      setMessage("");
      setName("");
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Failed Sending",
        "We couldn't send the email, please try again",
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
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          aria-label="email"
          className="input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-textarea">
        <textarea
          className="input"
          aria-label="message"
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Tell me about your project"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="d-flex" style={{ justifyContent: 'center' }}>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? <Loader /> : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
