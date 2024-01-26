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

const services = [
  {
    id: "/services#events",
    title: "Organização de Eventos",
    img: serviceEvents,
  },
  {
    id: "/services#admin",
    title: "Gestão Administrativa",
    img: serviceAdmin,
  },
  {
    id: "/services#services",
    title: "Aquisição de Serviços",
    img: serviceServices,
  },
  {
    id: "/services#project",
    title: "Relatórios de Projeto",
    img: serviceProject,
  },
  {
    id: "/services#costs",
    title: "Minimização de Custos",
    img: serviceCosts,
  },
  {
    id: "/services#research",
    title: "Apoio à Investigação",
    img: serviceResearch,
  },
];

const HomeServices = () => {
  return (
    <div className={styles.services}>
      <Fade direction="down" triggerOnce>
        <h1 className="title">Os Nossos Serviços</h1>
      </Fade>
      <div className={styles.services__container}>
        {services.map((service) => (
          <HomeServiceContainer
            key={nanoid()}
            id={service.id}
            title={service.title}
            image={service.img}
            className={styles.container}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
