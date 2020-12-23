import React from "react";

const Project = ({ url, img, name, technologies, description }) => {
  return (
    <a aria-label="social-dashboard" href={url} className="project-link">
      <article className="project">
        <div className="project-top">
          <figure className="project__img-container">
            <img src={img} alt={name} />
          </figure>
          <svg
            className="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#f7f6f3"
              fillOpacity="1"
              d="M0,192L80,202.7C160,213,320,235,480,213.3C640,192,800,128,960,122.7C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="project__info">
          <h4 className="project__title">{name}</h4>
          <div className="project__tech">
            <ul className="tech-list">
              {technologies.map((tech) => (
                <li key={`${name}-${tech}`}>
                  <span
                    className="iconify"
                    data-icon={tech}
                    data-inline="false"
                  ></span>
                </li>
              ))}
            </ul>
          </div>
          <p className="project__description">{description}</p>
        </div>
      </article>
    </a>
  );
};

export default Project;
