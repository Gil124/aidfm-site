import React from "react";
import styles from "./ResearchCenters.module.css";
import ResearchCC from "./Container/ResearchCC";
import { nanoid } from "nanoid";
import rc1 from "../../assets/ci1.jpeg";
import rc2 from "../../assets/ci2.jpeg";
import rc3 from "../../assets/ci3.jpeg";
import rc4 from "../../assets/ci4.jpeg";
import rc5 from "../../assets/ci5.jpeg";
import { getContent } from "../Navbar/Navbar";

const centers = [
  {
    id: "CCUL",
    src: rc1,
    desc: "doctors",
  },
  {
    id: "ISAMB",
    src: rc2,
    desc: "green space",
  },
  {
    id: "CEMBE",
    src: rc3,
    desc: "surgery",
  },
  {
    id: "bioethic",
    src: rc4,
    desc: "researcher",
  },
  {
    id: "egas",
    src: rc5,
    desc: "brain",
  },
];

function ResearchCenters() {
  return (
    <>
      <div className={styles.page}>
        {centers.map((center, index) => (
          <ResearchCC
            key={nanoid()}
            id={center.id}
            image={center.src}
            desc={center.desc}
            title={getContent().research.content[index].sigla ?? getContent().research.content[index].title}
            subtitle={getContent().research.content[index].sigla ? getContent().research.content[index].title : null}
            text={getContent().research.content[index].description}
          />
        ))}
      </div>
    </>
  );
}

export default ResearchCenters;
