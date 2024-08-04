import React from "react";
import styles from "./Button.module.css";
import { IoIosArrowForward } from "react-icons/io";
import pt from "../../assets/lang-pt.png";
import en from "../../assets/lang-en.svg";
import { getLang } from "../Navbar/Navbar";

const STYLES = [styles.primary, styles.home, styles.lang, styles.menu];

function Button({ text, type, onClick }) {
  switch (type) {
    case "btn--home":
      return (
        <button className={STYLES[1]} onClick={onClick}>
          {text}
          <IoIosArrowForward className={styles.btn__home_arrow} />
        </button>
      );
    case "btn--lang":
      return (
        <button
          className={STYLES[2]}
          onClick={onClick}
          style={{ backgroundImage: `url(${pt})` }}
        >
          <img src={getLang() === "PT" ? pt : en} alt="Portuguese Flag" />
          <img src={getLang() === "PT" ? en : pt} alt="English Flag" />
          {text}
        </button>
      );
    case "btn--menu":
      return (
        <button className={STYLES[3]} onClick={onClick}>
          {text}
        </button>
      );
    default:
      return (
        <button className={STYLES[0]} onClick={onClick}>
          {text}
        </button>
      );
  }
}

export default Button;
