import { init } from "emailjs-com";
import emailjs from "emailjs-com";

import emailConfig from "../constants/email-template";

init(process.env.REACT_APP_EMAILJS_USER);

/**
 * Send an email with EmaiJS
 * @param {string} email
 * @param {string} name
 * @param {string} message
 */
async function sendContactEmail(email, name, message) {
  const data = {
    message,
    from_name: name,
    reply_to: email,
    to_name: emailConfig.templateData.to_name,
  };

  return emailjs.send(emailConfig.service, emailConfig.templateId, data);
}

export { sendContactEmail };
