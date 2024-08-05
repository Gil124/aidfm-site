import React from "react";
import styles from "./History.module.css";
import { useState, useEffect } from "react";
import history1 from "../../assets/history1.jpeg";
import history2 from "../../assets/history2.jpeg";
import history3 from "../../assets/history3.jpeg";
import history4 from "../../assets/history4.jpeg";
import history5 from "../../assets/history5.jpeg";
import { Fade } from "react-awesome-reveal";
import { getContent } from "../Navbar/Navbar";

function History() {
  const [currentText, setCurrentText] = useState("");
  const [activeYear, setActiveYear] = useState(1);
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    const windowSize = window.innerHeight / 2;
    const divTop = document
      .getElementById("container")
      .getBoundingClientRect().top;

    let newSection;

    if (-divTop <= windowSize) {
      newSection = 1;
    } else if (-divTop > windowSize * 1 && -divTop < windowSize * 3) {
      newSection = 2;
    } else if (-divTop > windowSize * 3 && -divTop < windowSize * 5) {
      newSection = 3;
    } else if (-divTop > windowSize * 5 && -divTop < windowSize * 7) {
      newSection = 4;
    } else if (-divTop >= windowSize * 7) {
      newSection = 5;
    }

    if (newSection !== currentSection) {
      setCurrentSection(newSection);

      // Update currentText based on the new section
      switch (newSection) {
        case 1:
          setCurrentText(getContent().about.history.content[0].description);
          setActiveYear(1);
          break;
        case 2:
          setCurrentText(getContent().about.history.content[1].description);
          setActiveYear(2);
          break;
        case 3:
          setCurrentText(getContent().about.history.content[2].description);
          setActiveYear(3);
          break;
        case 4:
          setCurrentText(getContent().about.history.content[3].description);
          setActiveYear(4);
          break;
        case 5:
          setCurrentText(getContent().about.history.content[4].description);
          setActiveYear(5);
          break;
        default:
          setCurrentText(getContent().about.history.content[5].description);
          setActiveYear(1);
          break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="history" className={styles.history}>
        <h1 className="title">
          {getContent().about.history.title.split(" H").slice(0, 1).join(" ")}
          <span>{` H${getContent()
            .about.history.title.split(" H")
            .slice(1)
            .join("H")}`}</span>
        </h1>
        <div className={styles.mobile_container}>
            <div className={styles.mobile_date}>
              <img className={styles.mobile_date_image_right} src={history1}/>
              <h2 className={styles.mobile_date_title_right}>{getContent().about.history.content[0].date}</h2>
              <p className={styles.mobile_date_text_right}>{getContent().about.history.content[0].description}</p>
            </div>
            <div className={styles.mobile_date}>
              <img className={styles.mobile_date_image_left} src={history2}/>
              <h2 className={styles.mobile_date_title_left}>{getContent().about.history.content[1].date}</h2>
              <p className={styles.mobile_date_text_left}>{getContent().about.history.content[1].description}</p>
            </div>
            <div className={styles.mobile_date}>
              <img className={styles.mobile_date_image_right} src={history3}/>
              <h2 className={styles.mobile_date_title_right}>{getContent().about.history.content[2].date}</h2>
              <p className={styles.mobile_date_text_right}>{getContent().about.history.content[2].description}</p>
            </div>
            <div className={styles.mobile_date}>
              <img className={styles.mobile_date_image_left} src={history4}/>
              <h2 className={styles.mobile_date_title_left}>{getContent().about.history.content[3].date}</h2>
              <p className={styles.mobile_date_text_left}>{getContent().about.history.content[3].description}</p>
            </div>
            <div className={styles.mobile_date}>
              <img className={styles.mobile_date_image_right} src={history5}/>
              <h2 className={styles.mobile_date_title_right}>{getContent().about.history.content[4].date}</h2>
              <p className={styles.mobile_date_text_right}>{getContent().about.history.content[4].description}</p>
            </div>
        </div>
        <div className={styles.container} onScroll={handleScroll}>
          <div className={styles.menu}>
            <div className={styles.offset}>
              <div className={styles.menuContainer}>
                <div className={styles.yearContainer}>
                  <label
                    className={`${styles.year} ${
                      activeYear === 1 ? styles.active : styles.hidden
                    }`}
                  >
                    <a href="#img1">{getContent().about.history.content[0].date}</a>
                  </label>
                  <label
                    className={`${styles.year} ${
                      activeYear === 2 ? styles.active : styles.hidden
                    }`}
                  >
                    <a href="#img2">{getContent().about.history.content[1].date}</a>
                  </label>
                  <label
                    className={`${styles.year} ${
                      activeYear === 3 ? styles.active : styles.hidden
                    }`}
                  >
                    <a href="#img3">{getContent().about.history.content[2].date}</a>
                  </label>
                  <label
                    className={`${styles.year} ${
                      activeYear === 4 ? styles.active : styles.hidden
                    }`}
                  >
                    <a href="#img4">{getContent().about.history.content[3].date}</a>
                  </label>
                  <label
                    className={`${styles.year} ${
                      activeYear === 5 ? styles.active : styles.hidden
                    }`}
                  >
                    <a href="#img5">{getContent().about.history.content[4].date}</a>
                  </label>
                </div>
                <p className={styles.transition}>{currentText}</p>
              </div>
            </div>
          </div>
          <hr className={styles.divider} />

          <div id="container" className={styles.images}>
            <Fade fraction={0.5}>
              <div id="img1" className={styles.imgContainer}>
                <img
                  src={history1}
                  alt="men signing contract"
                  className={styles.img}
                />
              </div>
            </Fade>
            <Fade fraction={0.5}>
              <div id="img2" className={styles.imgContainer}>
                <img
                  src={history2}
                  alt="women in meeting pointing to a whiteboard"
                  className={styles.img}
                />
              </div>
            </Fade>
            <Fade fraction={0.5}>
              <div id="img3" className={styles.imgContainer}>
                <img
                  src={history3}
                  alt="business meeting"
                  className={styles.img}
                />
              </div>
            </Fade>
            <Fade fraction={0.5}>
              <div id="img4" className={styles.imgContainer}>
                <img
                  src={history4}
                  alt="two people signing a contract"
                  className={styles.img}
                />
              </div>
            </Fade>
            <Fade fraction={0.5}>
              <div id="img5" className={styles.imgContainer}>
                <img
                  src={history5}
                  alt="corporate people talking"
                  className={styles.img}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
