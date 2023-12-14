import React from "react";
import MissionContainer from "./MissionContainer/MissionContainer";
import styles from "./Mission.module.css";

const titleM = "A Nossa Missão";
const textM =
  "A nossa missão é promover e desenvolver atividades de ensino, formação e investigação científica, bem como criar infraestruturas médicas e tecnológicas. ";

const titleV = "A Nossa Visão";
const textV =
  "A AIDFM é uma instituição de excelência e referência em ensino, formação e investigação científica.";

function Mission() {
  return (
    <div id="mission" className={styles.container}>
      <MissionContainer title={titleM} text={textM} />
      <MissionContainer title={titleV} text={textV} />
    </div>
  );
}

export default Mission;
