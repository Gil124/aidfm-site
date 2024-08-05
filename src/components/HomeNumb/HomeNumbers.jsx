import React from "react";
import styles from "./HomeNumbers.module.css";
import DataContainer from "./DataContainer/DataContainer";
import backgroundContainer from "../../assets/home-numbers.jpeg";
import { Fade } from "react-awesome-reveal";
import { getContent } from "../Navbar/Navbar";

let numbers = [200, 100, 220, 50];
let icons = ["employees", "projects", "partners", "investigators"];

function HomeNumbers() {
  return (
    <Fade direction="up" fraction={0} triggerOnce>
    <div className={styles.numbers}>
      <div
        className={styles.container}
        style={{
          background: `linear-gradient(
            320deg,
            rgba(30, 20, 132, 0.6) -10%,
            rgba(104, 64, 145, 0.6) 110%
          ),
          url(${backgroundContainer})`,
        }}
      >
        <Fade className={styles.numbers} childClassName="title" triggerOnce>
          <h1 className="title">{getContent().homepage.numbers.title}</h1>
        </Fade>

        <div className={styles.data__container}>
          <Fade cascade damping={0.2} triggerOnce>
            {getContent().homepage.numbers.content.map((content, index) => (
              <DataContainer
                key={index}
                icon={icons[index]}
                title={content}
                number={numbers[index]}
              />
            ))}
          </Fade>
        </div>
      </div>
    </div></Fade>
  );
}

export default HomeNumbers;
