import React, { useRef, useState, useMemo, useCallback } from "react";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";
import project3 from "../../assets/project3.jpeg";
import project4 from "../../assets/project4.jpeg";
import { nanoid } from "nanoid";
import styles from "./HomeProjects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";

const projects = [
  {
    image: project1,
    title: "Células Estaminais",
    text: "A Equipa de Investigação dirigida pelo Dr. Luis Andrade tem vindo a inovar na área de pesquisa contra o cancro.",
  },
  {
    image: project2,
    title: "Natureza Farmacêutica",
    text: "A Equipa de Investigação dirigida pelo Dr. Pedro Andrade tem vindo a produzir novos medicamentos baseados nos componentes que encontramos nas plantas.",
  },
  {
    image: project3,
    title: "Fígados Sintéticos",
    text: "A Equipa de Investigação dirigida pelo Dra. Luisa Andrade tem vindo a criar novos tecidos de orgãos em laboratório.",
  },
  {
    image: project4,
    title: "Concurso de Investigação",
    text: "Decorre agora a nível nacional um concurso de investigação médica, com um prémio para o vencedor.",
  },
];

function HomeProjects() {
  return (
    <>
      <h1 className="title">Os Nossos Projetos</h1>
      <Fade
        className={styles.container}
        direction="up"
        triggerOnce
        fraction={0.5}
      >
        <Swiper
          slidesPerView={window.innerWidth < 1000 ? 1.1 : 1.8}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundImage: `url(${project1})` }}>
            {({ isActive }) =>
              isActive ? (
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>{projects[0].title}</h3>
                  <p className={styles.text}>{projects[0].text}</p>
                </div>
              ) : (
                <></>
              )
            }
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${project2})` }}>
            {({ isActive }) =>
              isActive ? (
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>{projects[1].title}</h3>
                  <p className={styles.text}>{projects[1].text}</p>
                </div>
              ) : (
                <></>
              )
            }
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${project3})` }}>
            {({ isActive }) =>
              isActive ? (
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>{projects[2].title}</h3>
                  <p className={styles.text}>{projects[2].text}</p>
                </div>
              ) : (
                <></>
              )
            }
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${project4})` }}>
            {({ isActive }) =>
              isActive ? (
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>{projects[3].title}</h3>
                  <p className={styles.text}>{projects[3].text}</p>
                </div>
              ) : (
                <></>
              )
            }
          </SwiperSlide>
        </Swiper>
      </Fade>
    </>
  );
}

export default HomeProjects;
