import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectElements = projects.map(element => <ProjectItem key={element.id} name={element.name} about={element.about} technologies={element.technologies}/>)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectElements}</div>
    </div>
  );
}

export default ProjectList;
