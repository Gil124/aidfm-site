import React from "react";
import styles from "./ServicesContainer.module.css";
import { nanoid } from "nanoid";

function ServicesContainer({ id, image, desc, title, text, border }) {

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div id={id} className={styles.container}>
      <img
        src={image}
        alt={desc}
        className={styles.img}
        style={{ borderRadius: border}}
      />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text} key={nanoid()}>{text}</p>
      </div>
    </div>
  );
}

export default ServicesContainer;
