import React from "react";

const SocialLink = ({ url, icon, className }) => {
  return (
    <a
      className={`link ${className ? className : ""}`}
      target="_blank"
      rel="noreferrer"
      href={url}
      aria-label="social media link"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
