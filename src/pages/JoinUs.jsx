import React from "react";
import styles from "./JoinUs.module.css";
import heroImage from "../assets/joinUs.svg";
import { getContent } from "../components/Navbar/Navbar";

function JoinUs() {
  return (
    <>
      <div className={styles.hero_section}>
        <div className={styles.left_container}>
          <img src={heroImage}></img>
        </div>
        <div className={styles.right_container}>
          <h1 className={styles.title}>{getContent().join.content[0].title}</h1>
          <p className={styles.description}>{getContent().join.content[0].description}</p>
          <h3 className={styles.catch}>{getContent().join.content[0].catch}</h3>
        </div>
        <div className={styles.left_corner_white}></div>
      </div>
      <div className={styles.relats_section}>
        <div className={styles.right_corner_blue}></div>
      </div>
    </>
  );
}

export default JoinUs;
