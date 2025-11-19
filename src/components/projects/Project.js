import React from "react";

const Project = ({ url, img, name, technologies, description }) => {
  return (
    <a aria-label={name} href={url} className="project-link" target="_blank" rel="noopener noreferrer">
      <article className="project">
        <div className="project__img-container">
          <img src={img} alt={name} loading="lazy" />
        </div>

        <div className="project__info">
          <h4 className="project__title">{name}</h4>
          <p className="project__description">{description}</p>
          <div className="project__tech">
            <ul className="tech-list">
              {technologies.map((tech) => (
                <li key={`${name}-${tech}`} title={tech}>
                  <span
                    className="iconify"
                    data-icon={tech}
                    data-inline="false"
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </a>
  );
};

export default Project;
