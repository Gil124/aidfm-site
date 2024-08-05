import React from "react";
import styles from "./Objectives.module.css";
import ObjectiveContainer from "./ObjectiveContainer/ObjectiveContainer";
import { nanoid } from "nanoid";
import obj1 from "../../assets/obj1.jpeg";
import obj2 from "../../assets/obj2.jpeg";
import obj3 from "../../assets/obj3.jpeg";
import obj4 from "../../assets/obj4.jpeg";
import obj5 from "../../assets/obj5.jpeg";
import obj6 from "../../assets/obj6.jpeg";
import obj7 from "../../assets/obj7.jpeg";
import { getContent } from "../Navbar/Navbar";

const obj = [
  {
    src: obj1,
    desc: "lab",
  },
  {
    src: obj2,
    desc: "investigation lab",
  },
  {
    src: obj3,
    desc: "Business meeting",
  },
  {
    src: obj4,
    desc: "person studying",
  },
  {
    src: obj5,
    desc: "person signing paper",
  },
  {
    src: obj6,
    desc: "trophy",
  },
  {
    src: obj7,
    desc: "lab",
  },
];

function Objectives() {
  return (
    <>
      <h2 className="title-about">{getContent().about.objectives.title}</h2>
      <div className={styles.container}>
        {obj.map((objective, index) => (
          <ObjectiveContainer
            key={nanoid()}
            image={objective.src}
            desc={objective.desc}
            title={getContent().about.objectives.content[index].title}
            text={getContent().about.objectives.content[index].description}
          />
        ))}
      </div>
    </>
  );
}

export default Objectives;
