import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Headroom from "react-headroom";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import fullLogoImg from "../../assets/logo-nav.svg";
import mobileLogoImg from "../../assets/logo-nav-mobile.svg";
import { Fade } from "react-awesome-reveal";
import { IoClose } from "react-icons/io5";

const about = [
  { title: "Quem Somos", ref: "/about" },
  { title: "Orgãos Sociais", ref: "/about/team" },
  { title: "Centros de Investigação", ref: "/about/ci" },
  { title: "Informação Institucional", ref: "/about/docs" },
];

const services = [
  { title: "Organização de Eventos", ref: "/services#events" },
  { title: "Gestão Administrativa", ref: "/services#admin" },
  { title: "Minimização de Custos", ref: "/services#costs" },
  { title: "Aquisição de Serviços", ref: "/services#services" },
  { title: "Relatórios de Projeto", ref: "/services#projects" },
  { title: "Apoio à Investigação", ref: "/services#research" },
];

const join = [{ title: "", ref: "" }];

const heights = ["200px", "269px", "150px", "100px"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [links, setLinks] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleLinks = (link) => {
    setMenu(true);
    setLinks(link);
    setTimeout(() => {
      setHovered(true);
    }, 300);
  };

  const handleMouseExit = () => {
    setMenu(false); // Hide the dropdown menu when mouse exits
    setHovered(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.getElementsByTagName("body")[0].style =
        "height: 100%; overflow: hidden;";
    } else {
      document.getElementsByTagName("body")[0].style =
        "height: unset; overflow: unset;";
    }
    console.log("pressed");
  };

  const toggleLang = () => {};

  return (
    <>
      <Headroom style={{ zIndex: "3" }} disable={window.innerWidth < 1000}>
        <div className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.left_logo}>
              <Link
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
              <li>
                <Link
                  to="/about"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={() => handleLinks(0)}
                >
                  <p>Sobre Nós</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={() => handleLinks(1)}
                >
                  <p>Serviços</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/join"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={() => handleLinks(2)}
                >
                  <p>Junte-se a Nós</p>
                </Link>
              </li>
            </ul>
            <div
              className={styles.menu}
              onMouseLeave={handleMouseExit}
              style={
                menu
                  ? {
                      opacity: "1",
                      pointerEvents: "auto",
                      transform: "translateY(0)",
                      height: heights[links],
                    }
                  : {}
              }
            >
              {links === 0
                ? about.map((link) => (
                    <a
                      key={nanoid()}
                      href={link.ref}
                      className={styles.menuLink}
                    >
                      {link.title}
                    </a>
                  ))
                : null}
              {links === 1
                ? services.map((link) => (
                    <a
                      key={nanoid()}
                      href={link.ref}
                      className={styles.menuLink}
                    >
                      {link.title}
                    </a>
                  ))
                : null}
              {links === 2
                ? join.map((link) => (
                    <a
                      key={nanoid()}
                      href={link.ref}
                      className={styles.menuLink}
                    >
                      {link.title}
                    </a>
                  ))
                : null}
            </div>

            <div className={styles.right_lang}>
              <div className={styles.toggle}>
                <Button
                  text="MENU"
                  type="btn--menu"
                  onClick={handleMenuClick}
                />
              </div>
              <Button text="" type="btn--lang" onClick={toggleLang} />
              <h1>PT</h1>
            </div>
          </div>
        </div>
        <div className={styles.mobileMenu}></div>
      </Headroom>
      <div
        className={styles.overlay}
        style={menuOpen ? { transform: "translateY(0)" } : {}}
      >
        <div className={styles.menu_exitButton_container}>
          <IoClose
            className={styles.menu_exitButton}
            onClick={handleMenuClick}
          />
        </div>
        <div className={styles.menu_link_list}></div>
      </div>
    </>
  );
};

export default Navbar;
