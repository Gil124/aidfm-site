import React from "react";
import MiniMenu from "../components/MiniMenu/MiniMenu";
import styles from "./AboutUs.module.css";
import { Routes, Route } from "react-router-dom";
import WhoWeAre from "../components/WhoWeAre";
import ResearchCenters from "../components/Research/ResearchCenters";
import Team from "../components/Team/Team";
import Information from "../components/InsititionalInformation/Information";

function AboutUs() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.left}>
          <Routes>
            <Route path="/team" element={<MiniMenu page={1} />}></Route>
            <Route path="/ci" element={<MiniMenu page={2} />}></Route>
          </Routes>
        </div>
        <div className={styles.middle}>
          <Routes>
            <Route path="/" element={<WhoWeAre />}></Route>
            <Route path="/team" element={<Team/>}></Route>
            <Route path="/ci" element={<ResearchCenters />}></Route>
            <Route path="/docs" element={<Information />}></Route>
          </Routes>
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  );
}

export default AboutUs;
