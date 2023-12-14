import React from "react";
import styles from "./Under.module.css";

function Under({ image, name, position, text, bPosition }) {
  return (
    <div className={styles.container}>
      <div style={{backgroundImage:`url(${image})`, backgroundPosition:bPosition}} className={styles.img} >
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.position}>{position}</p>
    </div>
  );
}

export default Under;
