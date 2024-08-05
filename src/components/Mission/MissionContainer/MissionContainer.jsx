import React from "react";
import styles from "./MissionContainer.module.css";
import { IoRocketOutline, IoTelescopeOutline } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";

function MissionContainer({ title, text }) {
  return (
    <div className={styles.container}>
      {title === "A Nossa Missão" || title === "Mission" ? (
        <>
          <Fade fraction={0.2} direction="up" triggerOnce>
            <IoRocketOutline className={styles.logo} />
            <h2 className={styles.title}>{title}</h2>
          </Fade>
        </>
      ) : (
        <>
          <Fade fraction={0.2} direction="up" triggerOnce>
            <IoTelescopeOutline className={styles.logo} />
            <h2 className={styles.title}>{title}</h2>
          </Fade>
        </>
      )}
      <Fade fraction={0.2} className={styles.text} direction="up" triggerOnce>
        <p>{text}</p>
      </Fade>
    </div>
  );
}

export default MissionContainer;
