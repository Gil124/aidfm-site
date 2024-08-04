import React, { useState, memo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { nanoid } from "nanoid";
import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
  IoHomeOutline,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io5";
import logoImg from "../../assets/logo-nav.svg";



const about = {
  url: "/about",
  title: "Sobre Nós",
  subtitles: [
    { url: "", title: "Quem Somos" },
    { url: "/team", title: "Orgãos Sociais" },
    { url: "/ci", title: "Centros de Investigação" },
  ],
};

const services = {
  url: "/services",
  title: "Serviços",
  subtitles: [
    { id: "/services#events", title: "Organização de Eventos" },
    { id: "/services#admin", title: "Gestão Administrativa" },
    { id: "/services#services", title: "Aquisição de Serviços" },
    { id: "/services#project", title: "Relatórios de Projeto" },
    { id: "/services#costs", title: "Minimização de Custos" },
    { id: "/services#research", title: "Apoio à investigação" },
  ],
};

const projects = {
  url: "/projects",
  title: "Projetos",
  subtitles: [
    { id: "/projects#numbers", title: "Os Nossos Números" },
    { id: "/projects#passProj", title: "Projetos Passados" },
    { id: "/projects#onProj", title: "Projetos em Andamento" },
  ],
};

const join = {
  url: "/join",
  title: "Junte-se a Nós",
  subtitles: [
    { id: "/join#whyUs", title: "Porquê Nós?" },
    { id: "/join#benefits", title: "Benefícios" },
    { id: "/join#candidate", title: "Candidate-se" },
  ],
};

const contacts = {
  title: "Contactos",
};

function Footer() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const currentTitleRef = useRef(currentTitle);

  function handleClick(number) {
    if (currentTitle === number) setCurrentTitle(0);
    else setCurrentTitle(number);
    currentTitleRef.current = number;
  }

  function handleFooterStyle(number) {
    if (window.innerWidth > 1000) return { display: "flex" };
    else if (currentTitle === number) return { display: "flex" };
    else return { display: "none" };
  }

  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img src={logoImg} alt="Logo" />
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.bigContainer}>
          <h2 className={styles.title} onClick={() => handleClick(1)}>
            {about.title}
          </h2>
          {about.subtitles
            ? about.subtitles.map((subtitle) => (
                <div
                  className={styles.mediumContainer}
                  key={nanoid()}
                  style={handleFooterStyle(1)}
                >
                  <Link
                    to={about.url + subtitle.url}
                    className={styles.subTitle}
                  >
                    {subtitle.title}
                  </Link>
                </div>
              ))
            : null}
        </div>
        <div className={styles.bigContainer}>
          <h2 className={styles.title} onClick={() => handleClick(2)}>
            {services.title}
          </h2>
          {services.subtitles
            ? services.subtitles.map((section) => (
                <div
                  className={styles.mediumContainer}
                  key={nanoid()}
                  style={handleFooterStyle(2)}
                >
                  <a href={`${section.id}`} className={styles.subTitle}>
                    {section.title}
                  </a>
                </div>
              ))
            : null}
        </div>
        <div className={styles.bigContainer}>
          <h2 className={styles.title} onClick={() => handleClick(3)}>
            {projects.title}
          </h2>
          {projects.subtitles
            ? projects.subtitles.map((section) => (
                <div
                  className={styles.mediumContainer}
                  key={nanoid()}
                  style={handleFooterStyle(3)}
                >
                  <a href={`${section.id}`} className={styles.subTitle}>
                    {section.title}
                  </a>
                </div>
              ))
            : null}
        </div>
        <div className={styles.bigContainer}>
          <h2 className={styles.title} onClick={() => handleClick(4)}>
            {join.title}
          </h2>
          {join.subtitles
            ? join.subtitles.map((section) => (
                <div
                  className={styles.mediumContainer}
                  key={nanoid()}
                  style={handleFooterStyle(4)}
                >
                  <a href={`${section.id}`} className={styles.subTitle}>
                    {section.title}
                  </a>
                </div>
              ))
            : null}
        </div>
        <div className={styles.bigContainer}>
          <h2 className={styles.titleContacts}>{contacts.title}</h2>
          <div className={styles.contactContainer}>
            <IoMailOutline className={styles.contactLogo} />
            <a href="mailto: aidfm@medicina.ulisboa.pt">
              aidfm@medicina.ulisboa.pt
            </a>
          </div>
          <div className={styles.contactContainer}>
            <IoCallOutline className={styles.contactLogo} />
            <a href="tel:+351 93 939 393">+351 93 939 393</a>
          </div>
          <div className={styles.contactContainer}>
            <IoHomeOutline className={styles.contactLogo} />
            <a href="tel:+351 21 232 323">+351 21 232 323</a>
          </div>
        </div>
      </div>
      <div className={styles.contacts}>
        <div className={styles.locationContainer}>
          <IoLocationOutline className={styles.locationLogo} />
          <p className={styles.info}>
            AIDFM Av. Prof. Egas Moniz, Piso 01 <br />
            1649-028 Lisboa <br /> Portugal
          </p>
        </div>
        <a href="">
          <IoLogoInstagram className={styles.social} />
        </a>
        <a href="">
          <IoLogoFacebook className={styles.social} />
        </a>
        <a href="">
          <IoLogoLinkedin className={styles.social} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
