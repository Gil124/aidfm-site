import React, { useRef, useState, useMemo, useCallback } from "react";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { nanoid } from "nanoid";
import styles from "./HomeProjects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";
import { getContent, getProjects } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function HomeProjects() {
  const projectsContent = getProjects();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="title">{getContent().homepage.projects.title}</h1>
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
          {projectsContent
            .sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
            .slice(0, 10)
            .map((project, index) => (
              <SwiperSlide
                onClick={() => {scrollTo(0,0); navigate("/projects/" + index);}}
                key={nanoid()}
                style={{ backgroundImage: `url(${project.img})` }}
              >
                {({ isActive }) =>
                  isActive ? (
                    <div className={styles.textContainer}>
                      <h3 className={styles.title}>{project.title}</h3>
                      <p className={styles.text}>{project.description}</p>
                    </div>
                  ) : (
                    <></>
                  )
                }
              </SwiperSlide>
            ))}
        </Swiper>
      </Fade>
    </>
  );
}

export default HomeProjects;
