import React from "react";
import styles from "./HomeNumbers.module.css";
import DataContainer from "./DataContainer/DataContainer";
import backgroundContainer from "../../assets/home-numbers.jpeg";
import { Fade } from "react-awesome-reveal";

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
          <h1 className="title">Os Nossos Números</h1>
        </Fade>

        <div className={styles.data__container}>
          <Fade cascade damping={0.2} triggerOnce>
            <DataContainer
              icon={"employees"}
              title={"Colaboradores"}
              number={200}
            />
            <DataContainer icon={"projects"} title={"Projetos"} number={100} />
            <DataContainer icon={"partners"} title={"Parcerias"} number={220} />
            <DataContainer
              icon={"investigators"}
              title={"Investigadores"}
              number={50}
            />
          </Fade>
        </div>
      </div>
    </div></Fade>
  );
}

export default HomeNumbers;
