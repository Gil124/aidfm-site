import React from "react";
import styles from "./HomeServices.module.css";
import HomeServiceContainer from "./HomeServiceContainer/HomeServiceContainer";
import serviceEvents from "../../assets/service-events.jpeg";
import serviceAdmin from "../../assets/service-admin.jpeg";
import serviceServices from "../../assets/service-services.jpeg";
import serviceProject from "../../assets/service-projects.jpeg";
import serviceCosts from "../../assets/service-costs.jpeg";
import serviceResearch from "../../assets/service-investigation.jpeg";
import { nanoid } from "nanoid";
import { Fade } from "react-awesome-reveal";
import { getContent } from "../Navbar/Navbar";

const services = [
  serviceEvents,
  serviceAdmin,
  serviceServices,
  serviceProject,
  serviceCosts,
  serviceResearch,
];

const HomeServices = () => {
  return (
    <div className={styles.services}>
      <Fade direction="down" triggerOnce>
        <h1 className="title">{getContent().homepage.services.title}</h1>
      </Fade>
      <div className={styles.services__container}>
        {getContent().homepage.services.content.map((service,index) => (
          <HomeServiceContainer
          link={getContent().navbar.subtitles[1][index].url}
            key={nanoid()}
            title={service}
            image={services[index]}
            className={styles.container}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
