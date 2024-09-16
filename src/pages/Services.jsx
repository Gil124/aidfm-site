import React from "react";
import ServicesContainer from "../components/Services/ServicesContainer";
import { nanoid } from "nanoid";
import service1 from "../assets/service1.jpeg";
import service2 from "../assets/service2.jpeg";
import service3 from "../assets/service3.jpeg";
import service4 from "../assets/service4.jpeg";
import service5 from "../assets/service5.jpeg";
import service6 from "../assets/service6.jpeg";
import { getContent } from "../components/Navbar/Navbar";
import MiniMenu from "../components/MiniMenu/MiniMenu";
import ResearchCC from "../components/Research/Container/ResearchCC";
import styles from "./Services.module.css";

const services = [
  {
    id: "events",
    src: service1,
  },
  {
    id: "admin",
    src: service2,
  },
  {
    id: "costs",
    src: service3,
  },
  {
    id: "services",
    src: service4,
  },
  {
    id: "project",
    src: service5,
  },
  {
    id: "research",
    src: service6,
  },
];

function Services() {
  return (
    <>
      <div className={styles.services}>
        <div className={styles.left}>
          <MiniMenu page={3} />
        </div>
        <div className={styles.middle}>
          <div className="page">
            {services.map((service, index) => (
              <ResearchCC
                key={nanoid()}
                id={service.id}
                image={service.src}
                title={getContent().services.content[index].title}
                text={getContent().services.content[index].description}
              ></ResearchCC>
            ))}
          </div>
        </div>
      </div>
      <h1 className="title-link">
        {getContent().services.end[0]}{" "}
        <a href={`mailto: ${getContent().footer.contact.content[0].content}`}>
          {getContent().services.end[1]}
        </a>{" "}
        {getContent().services.end[2]}
      </h1>
    </>
  );
}

export default Services;
