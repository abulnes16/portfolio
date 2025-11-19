import React from "react";
import SocialMedia from "../social-media/SocialMedia";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__social">
        <SocialMedia />
      </div>
      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} {t('footer.copyright')}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
