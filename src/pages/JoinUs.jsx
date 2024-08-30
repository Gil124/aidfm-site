import React from "react";
import styles from "./JoinUs.module.css";
import heroImage from "../assets/joinUs.svg";
import { getContent } from "../components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import { IoMailOutline } from "react-icons/io5";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import { nanoid } from "nanoid";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";

let imgs = [project1, project2, project3, project4, project2];
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
          {getContent().join.content[1].title}
        </h1>
        <div className={styles.opportunities}>
          {getContent().join.content[1].content.map((opportunity, index) => (
            <div key={nanoid()} className={styles.opportunity_container}>
              <h1 className={styles.opportunity_title}>{opportunity.person}</h1>
              <p className={styles.opportunity_description}>
                {opportunity.opinion}
              </p>
            </div>
          ))}
          {getContent().join.content[1].content.map((opportunity, index) => (
            <div key={nanoid()} className={styles.opportunity_container}>
              <h1 className={styles.opportunity_title}>{opportunity.person}</h1>
              <p className={styles.opportunity_description}>
                {opportunity.opinion}
              </p>
            </div>
          ))}
        </div>
        <button className={styles.candidate_button}>
          {"Candidatura Espontânea"}
          <IoMailOutline className={styles.symbol} />
        </button>
        <div className={styles.right_corner_white}></div>
      </div>
    </>
  );
}

export default JoinUs;
