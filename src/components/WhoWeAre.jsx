import React from "react";
import Mission from "./Mission/Mission";
import History from "./History/History";
import Values from "./Values/Values";
import Objectives from "./Objectives/Objectives";
import InstInfo from "./InstInfo/InstInfo";
import { getContent } from "./Navbar/Navbar";

function WhoWeAre() {
  return (
    <>
      <History />
      <hr
        style={{
          border: "1px solid #2b1fa9",
          width: "45%",
          borderRadius: "50%",
          margin: "10vh 27.2%",
        }}
      />
      <h2 className="title-about">{getContent().about.mission.title}</h2>
      <Mission />
      <Values />
      <hr
        style={{
          border: "1px solid #2b1fa9",
          width: "45%",
          borderRadius: "50%",
          margin: "10vh 27.2%",
        }}
      />
      <Objectives />
      <InstInfo />
    </>
  );
}

export default WhoWeAre;
