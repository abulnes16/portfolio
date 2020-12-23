import React from "react";

const SocialLink = ({ url, icon, className }) => {
  return (
    <a
      className={`link ${className}`}
      target="_blank"
      rel="noreferrer"
      href={url}
    >
      {icon}
    </a>
  );
};

export default SocialLink;
