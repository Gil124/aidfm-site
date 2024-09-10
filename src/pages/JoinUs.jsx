import React, { useRef, useState } from "react";
import styles from "./JoinUs.module.css";
import heroImage from "../assets/joinUs.svg";
import { getContent } from "../components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import { IoMailOutline } from "react-icons/io5";
import { nanoid } from "nanoid";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";
import CandidatureForm from "../components/CandidatureForm/CandidatureForm";


function JoinUs() {
  return (
    <>
      <div className={styles.hero_section}>
        <div className={styles.left_container}>
          <img src={heroImage}></img>
        </div>
        <div className={styles.right_container}>
          <h1 className={styles.title}>{getContent().join.content[0].title}</h1>
          <p className={styles.description}>
            {getContent().join.content[0].description}
          </p>
          <h3 className={styles.catch}>{getContent().join.content[0].catch}</h3>
        </div>
        <div className={styles.left_corner_white}></div>
      </div>
      <div className={styles.relats_section}>
        <h1 className={styles.section_title}>
          {getContent().join.content[1].title}
        </h1>
        <Fade className={styles.container} direction="up" fraction={0}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            keyboard={{
              enabled: false,
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
            {getContent().join.content[1].content.map((quote, index) => (
              <SwiperSlide key={nanoid()}>
                {({ isActive }) =>
                  isActive ? (
                    <div className={styles.quote_container}>
                      <img
                        src={"https://thispersondoesnotexist.com/"}
                        className={styles.quote_img}
                      ></img>
                      <div className={styles.textContainer}>
                        <p className={styles.quote}>"{quote.opinion}"</p>
                        <h3 className={styles.quote_author}>{quote.person}</h3>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )
                }
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
        <div className={styles.right_corner_blue}></div>
        <div className={styles.left_corner_blue}></div>
      </div>
      <div className={styles.opportunity_section}>
        <h1 className={styles.hero_title}>
          {getContent().join.content[2].title}
        </h1>
        <div className={styles.opportunities}>
          {getContent().join.content[2].content.map((opportunity, index) => (
            <div key={nanoid()} className={styles.opportunity_container}>
              <h1 className={styles.opportunity_title}>{opportunity.title}</h1>
              <h3 className={styles.opportunity_subtitle}>
                {getContent().join.content[2].description_title}
              </h3>
              <p className={styles.opportunity_description}>
                {opportunity.description}
              </p>
              <h3 className={styles.opportunity_subtitle}>
                {getContent().join.content[2].competences_title}
              </h3>
              <ul className={styles.competences}>
                {opportunity.competences.map((competence, index) => (
                  <li className={styles.competence} key={nanoid()}>{competence}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className={styles.candidate_button} onClick={()=>window.open('mailto:Aidfm.rh@medicina.ulisboa.pt?subject=Candidatura_posição_nome_candidato/a&body=As%20candidaturas%20devem%20ser%20submetidas,%20acompanhadas%20de%20CV%20com%20fotografia%20atualizada%20e%20comprovativo%20de%20Certificado%20de%20Habilitações')}>
          {"Candidatura Espontânea"}
          <IoMailOutline className={styles.symbol} />
        </button>
        <div className={styles.right_corner_white}></div>
      </div>
    </>
  );
}

export default JoinUs;
