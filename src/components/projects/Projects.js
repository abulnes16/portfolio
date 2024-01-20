import React from "react";
import Project from "./Project";
const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <div className="project-list">
        {projects.map(({ id, url, img, name, technologies, description }) => (
          <Project
            key={id}
            url={url}
            img={img}
            name={name}
            technologies={technologies}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
