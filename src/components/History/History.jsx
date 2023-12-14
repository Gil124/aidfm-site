import React from "react";
import styles from "./History.module.css";
import { useState, useEffect } from "react";
import history1 from "../../assets/history1.jpeg";
import history2 from "../../assets/history2.jpeg";
import history3 from "../../assets/history3.jpeg";
import history4 from "../../assets/history4.jpeg";
import history5 from "../../assets/history5.jpeg";
import { Fade } from "react-awesome-reveal";

let text1 =
  "A AIDFM foi fundada pelo senhor João dia 10 de outubro de 1993 com aprovação do Presidente da Républica";
let text2 =
  "Após a criação da Comissão Instaladora em dezembro de 1994, a AIDFM começou suas atividades no final do mesmo ano.";
let text3 =
  "Em janeiro de 1995, a primeira Direção foi eleita e trabalhou para garantir uma organização eficaz da associação.";
let text4 =
  "Posteriormente, a AIDFM foi reconhecida como pessoa coletiva de utilidade pública em março de 2000, pelo Primeiro-ministro António Guterres.";
let text5 =
  "Em abril de 2009, foi também reconhecida com o Estatuto de Mecenato Científico pelo Ministro da Ciência e pelo Secretário de Estado dos Assuntos Fiscais.";

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
          setCurrentText(text1);
          setActiveYear(1);
          break;
        case 2:
          setCurrentText(text2);
          setActiveYear(2);
          break;
        case 3:
          setCurrentText(text3);
          setActiveYear(3);
          break;
        case 4:
          setCurrentText(text4);
          setActiveYear(4);
          break;
        case 5:
          setCurrentText(text5);
          setActiveYear(5);
          break;
        default:
          setCurrentText(text1);
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
          A Nossa <span>História</span>
        </h1>
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
                    <a href="#img1">1993</a>
                  </label>
                  <label
                    className={`${styles.year} ${
                      activeYear === 2 ? styles.active : styles.hidden
                    }`}
                  >
                    <a href="#img2">1994</a>
                  </label>
                  <label
                    className={`${styles.year} ${
                      activeYear === 3 ? styles.active : styles.hidden
                    }`}
                  >
                    <a href="#img3">1995</a>
                  </label>
                  <label
                    className={`${styles.year} ${
                      activeYear === 4 ? styles.active : styles.hidden
                    }`}
                  >
                    <a href="#img4">2000</a>
                  </label>
                  <label
                    className={`${styles.year} ${
                      activeYear === 5 ? styles.active : styles.hidden
                    }`}
                  >
                    <a href="#img5">2009</a>
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
