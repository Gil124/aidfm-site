import React, { useState, memo, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { getContent, getProjects } from "../Navbar/Navbar";

function Footer() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const currentTitleRef = useRef(currentTitle);

  const navigate = useNavigate();

  function handleLink(toGO) {
    console.log(toGO);
    let page = toGO.split("#")[0];
    let section = toGO.split("#")[1];
    window.scrollTo(0, 0);
    navigate(page);
    setTimeout(() => {
      const contactSection = document.getElementById(section);
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  }

  function handleClick(number) {
    window.innerWidth >= 1000
      ? (window.location.href = getContent().navbar.titles[number - 1].url)
      : null;
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
        {getContent().navbar.titles.map((link, index) => (
          <div className={styles.bigContainer} key={nanoid()}>
            <h2
              id={link.url}
              className={styles.title}
              onClick={() => handleClick(index + 1)}
            >
              {link.title}
            </h2>
            {index ===2 ? getProjects().slice(0,5).map((project, index) => (
              <div
                id={project.url}
                className={styles.mediumContainer}
                key={nanoid()}
                style={handleFooterStyle(3)}
              >
                <a
                  className={styles.subTitle}
                  onClick={() => handleLink("/projects/" + index)}
                >
                  {project.title}
                </a>
              </div>
            )) : getContent().navbar.subtitles[index].map((section) => (
              <div
                id={section.url}
                className={styles.mediumContainer}
                key={nanoid()}
                style={handleFooterStyle(index + 1)}
              >
                <a
                  className={styles.subTitle}
                  onClick={() => handleLink(section.url)}
                >
                  {section.title}
                </a>
              </div>
            ))}
          </div>
        ))}
        <div className={styles.bigContainer}>
          <h2 className={styles.titleContacts}>
            {getContent().footer.contact.title}
          </h2>
          <div className={styles.contactContainer}>
            <IoMailOutline className={styles.contactLogo} />
            <a
              href={`mailto: ${getContent().footer.contact.content[0].content}`}
            >
              {getContent().footer.contact.content[0].content}
            </a>
          </div>
          <div className={styles.contactContainer}>
            <IoCallOutline className={styles.contactLogo} />
            <a href={`tel:${getContent().footer.contact.content[1].content}`}>
              {getContent().footer.contact.content[1].content}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.contacts}>
        <div className={styles.locationContainer}>
          <IoLocationOutline className={styles.locationLogo} />
          <p className={styles.info}>
            {getContent().footer.Address.street} <br />
            {getContent().footer.Address.postalCode} <br />{" "}
            {getContent().footer.Address.country}
          </p>
        </div>
        <a href="">
          <IoLogoInstagram className={styles.social} />
        </a>
        <a href="">
          <IoLogoFacebook className={styles.social} />
        </a>
        <a href="https://www.linkedin.com/company/associa%C3%A7%C3%A3o-para-investiga%C3%A7%C3%A3o-e-desenvolvimento-da-faculdade-de-medicina/">
          <IoLogoLinkedin className={styles.social} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
