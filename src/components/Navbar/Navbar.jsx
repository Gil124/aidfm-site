import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Headroom from "react-headroom";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import fullLogoImg from "../../assets/logo-nav.svg";
import mobileLogoImg from "../../assets/logo-nav-mobile.svg";
import { Fade } from "react-awesome-reveal";
import { IoClose, IoChevronBackOutline } from "react-icons/io5";
import content from "../../text.json";

if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", "PT");
}

let lang = localStorage.getItem("lang");

export const getContent = () => {
  if (lang === "EN") {
    return content.EN;
  } else {
    return content.PT;
  }
};

export const getLang = () => {
  return lang;
};

const heights = ["200px", "269px", "150px", "100px"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [links, setLinks] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [navLang, setNavLang] = useState(lang);
  const [subMenu, setSubMenu] = useState(false);

  const navigate = useNavigate();

  function handleLink(toGO) {
    let page = toGO.split("#")[0];
    let section = toGO.split("#")[1];
    navigate(page);
    setTimeout(() => {
      const contactSection = document.getElementById(section);
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  }

  const toggleLang = () => {
    if (lang === "PT") {
      setNavLang("EN");
      lang = "EN";
      localStorage.setItem("lang", "EN");
    } else {
      setNavLang("PT");
      lang = "PT";
      localStorage.setItem("lang", "PT");
    }
    window.location.reload();
  };

  const handleLinks = (link) => {
    if (link === 2) {
      if (window.innerWidth < 1000) {
        window.location.href = "/join";
        setMenuOpen(false);
      }
    
      else {
        setSubMenu(true);
        setLinks(link);
      }
    } else {
      setMenu(true);
      setSubMenu(true);
      setLinks(link);
      setTimeout(() => {
        setHovered(true);
      }, 300);
    }
  };

  const handleMenuBack = () => {
    setSubMenu(false);
  };

  const handleMouseExit = () => {
    setMenu(false); // Hide the dropdown menu when mouse exits
    setHovered(false);
  };

  const handleMenuOpen = () => {
    document.getElementsByTagName("body")[0].style =
      "height: 100%; overflow: hidden;";
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    document.getElementsByTagName("body")[0].style =
      "height: unset; overflow: unset;";
    setMenuOpen(false);
    setSubMenu(false);
  };

  return (
    <>
      <Headroom style={{ zIndex: "3" }} disable={window.innerWidth < 1000}>
        <div className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.left_logo}>
              <Link
                reloadDocument
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={window.innerWidth >= 1000 ? fullLogoImg : mobileLogoImg}
                  alt="Logo"
                />
              </Link>
            </div>
            <ul className={styles.right}>
              {getContent().navbar.titles.map((link, index) => (
                <li
                  key={nanoid()}
                  className={styles.navbarLink}
                  onMouseEnter={() => handleLinks(index)}
                >
                  <Link
                    reloadDocument
                    to={link.url}
                    className={styles.navbarLink}
                  >
                    <p>{link.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={styles.menu}
              style={
                menu
                  ? {
                      opacity: "1",
                      pointerEvents: "auto",
                      transform: "translateY(0)",
                      height: "fit-content",
                    }
                  : {}
              }
              onMouseLeave={handleMouseExit}
            >
              {getContent().navbar.subtitles[links].map((link, index) => (
                <p
                  key={nanoid()}
                  onClick={() => handleLink(link.url)}
                  className={styles.menuLink}
                >
                  {link.title}
                </p>
              ))}
            </div>

            <div className={styles.right_lang}>
              <div className={styles.toggle}>
                <Button text="MENU" type="btn--menu" onClick={handleMenuOpen} />
              </div>
              <Button text="" type="btn--lang" onClick={toggleLang} />
              <h1>{lang}</h1>
            </div>
          </div>
        </div>
        <div className={styles.mobileMenu}></div>
      </Headroom>
      <div
        className={styles.overlay}
        style={menuOpen ? { transform: "translateY(0)" } : {}}
      >
        <div
          className={styles.menu_exitButton_container}
          style={
            subMenu
              ? { justifyContent: "space-between" }
              : { justifyContent: "end" }
          }
        >
          {subMenu ? (
            <IoChevronBackOutline
              className={styles.menu_exitButton}
              onClick={handleMenuBack}
            />
          ) : null}
          <IoClose
            className={styles.menu_exitButton}
            onClick={handleMenuClose}
          />
        </div>
        <div className={styles.mobile_menu}>
          <div
            className={styles.mobile_title}
            style={!subMenu ? { display: "flex" } : { display: "none" }}
          >
            {getContent().navbar.titles.map((link, index) => (
              <Link
                key={nanoid()}
                className={styles.mobile_navbarLink}
                onClick={() => handleLinks(index)}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div
            className={styles.mobile_title}
            style={subMenu ? { display: "flex" } : { display: "none" }}
          >
            {getContent().navbar.subtitles[links].map((link, index) => (
              <Link
                key={nanoid()}
                className={styles.mobile_navbarLink}
                to={link.url}
                reloadDocument
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.menu_link_list}></div>
      </div>
    </>
  );
};

export default Navbar;
