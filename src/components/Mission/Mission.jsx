import React from "react";
import MissionContainer from "./MissionContainer/MissionContainer";
import styles from "./Mission.module.css";
import { getContent } from "../Navbar/Navbar";

function Mission() {
  return (
    <div id="mission" className={styles.container}>
      <MissionContainer title={getContent().about.mission.content.mission.title} text={getContent().about.mission.content.mission.content} />
      <MissionContainer title={getContent().about.mission.content.vision.title} text={getContent().about.mission.content.vision.content} />
    </div>
  );
}

export default Mission;
