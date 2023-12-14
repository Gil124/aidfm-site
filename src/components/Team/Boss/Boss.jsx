import React, { useState } from "react";
import styles from "./Boss.module.css";

function Boss({ profile }) {
  const [popUpVisibility, setVisibility] = useState(false);

  const handleImgClick = () => {
    setVisibility(true);
  }
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={profile.src} onClick={handleImgClick}/>
        <h3 className={styles.name}>{profile.name}</h3>
        <p className={styles.position}>{profile.position}</p>
      </div>
      <div className={popUpVisibility ? (styles.popUpVisible) : (styles.popUpNotVisible)}>
        <div className={styles.containerPopUp}>
          <img
            src={profile.src}
            alt={profile.name}
            className={styles.imgPopUp}
          />
          <div className={styles.textContainer}>
            <h3 className={styles.namePopUp}>{profile.name}</h3>
            <h4 className={styles.positionPopUp}>{profile.position}</h4>
            <p className={styles.textPopUp}>{profile.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Boss;
