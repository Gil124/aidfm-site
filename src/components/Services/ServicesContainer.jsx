import React from "react";
import styles from "./ServicesContainer.module.css";
import { nanoid } from "nanoid";

function ServicesContainer({ id, image, desc, title, text, border }) {
  return (
    <div id={id} className={styles.container}>
      <img
        src={image}
        alt={desc}
        className={styles.img}
        style={{ borderRadius: border, marginTop: "100%" }}
      />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        {text.map((paragraph) => (
        <p className={styles.text} key={nanoid()}>{paragraph}</p>
      ))}
      </div>
    </div>
  );
}

export default ServicesContainer;
