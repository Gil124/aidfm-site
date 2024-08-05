import React, { useState } from "react";
import styles from "./Boss.module.css";

function Boss({ profile, name, role, description }) {
  const [popUpVisibility, setVisibility] = useState(false);

  const handleImgClick = () => {
    //setVisibility(true);
  }
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={profile} onClick={handleImgClick}/>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{role}</p>
      </div>
      <div className={popUpVisibility ? (styles.popUpVisible) : (styles.popUpNotVisible)}>
        <div className={styles.containerPopUp}>
          <img
            src={profile}
            alt={name}
            className={styles.imgPopUp}
          />
          <div className={styles.textContainer}>
            <h3 className={styles.namePopUp}>{name}</h3>
            <h4 className={styles.positionPopUp}>{role}</h4>
            <p className={styles.textPopUp}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Boss;
