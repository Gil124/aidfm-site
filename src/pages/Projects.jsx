import React from "react";
import { nanoid } from "nanoid";
import { getContent, getProjects } from "../components/Navbar/Navbar";
import styles from "./Projects.module.css";

function Projects() {
  const projectsContent = getProjects();
  return (
    <div className={styles.projects}>
      <div className={styles.middle}>
        <h1 className={styles.title}>{getContent().homepage.projects.title}</h1>
        <div className="page">
          <div className={styles.projects_container}>
            {projectsContent.map((project, index) => (
              <div key={nanoid()} className={styles.project} onClick={() => window.location.href = `/projects/${index}`}>
                <img src={project.img} alt="project" />
                <div className={styles.text}>
                  <h1>{project.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
