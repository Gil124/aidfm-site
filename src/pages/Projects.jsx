import React from "react";
import { nanoid } from "nanoid";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import { getContent } from "../components/Navbar/Navbar";
import styles from "./Projects.module.css";

const projects = [project1, project2, project3, project4];

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.middle}>
        <h1 className={styles.title}>{getContent().homepage.projects.title}</h1>
        <div className="page">
          <div className={styles.projects_container}>
            {projects.map((project, index) => (
              <div key={nanoid()} className={styles.project}>
                <img src={project} alt="project" />
                <div className={styles.text}>
                  <h1>{getContent().homepage.projects.content[index].title}</h1>
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
