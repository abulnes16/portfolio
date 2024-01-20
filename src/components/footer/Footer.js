import React from "react";
import SocialMedia from "../social-media/SocialMedia";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2024 Angel Bulnes</p>
      <SocialMedia className="social-light" light="light" />
    </footer>
  );
};

export default Footer;
