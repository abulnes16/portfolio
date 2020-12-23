import React from "react";
import SocialLink from "./SocialLink";
import "./social-media.css";

import links from "../../constants/social-links";

const SocialMedia = ({ className, light }) => {
  return (
    <ul className={`social-media ${className}`}>
      {links.map((link) => (
        <li key={`${link.key}`} className="social-link">
          <SocialLink url={link.url} icon={link.icon} className={light} />
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
