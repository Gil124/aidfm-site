import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./HomeServiceContainer.module.css";
import { useNavigate } from "react-router-dom";
import { getContent } from "../../Navbar/Navbar";

function HomeServiceContainer({ title, image, link }) {
  const containerStyle = {
    background: `linear-gradient(135deg, #211b68 0%, #f8f8fd00 80%), url(${image}), lightgray 50% / cover no-repeat`,
  };
  const navigate = useNavigate();

  function handleCilck(toGO) {
    console.log(toGO);
    navigate(toGO);
  }
  return (
    <>
      <div className={styles.container} onClick={() => handleCilck(link)}>
        <img
          style={{
            ...containerStyle,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        />
        <h3>{title}</h3>
        <button className={styles.button}>
          {getContent().homepage.services.button}
          <IoIosArrowForward className={styles.arrow} />
        </button>
      </div>
    </>
  );
}

export default HomeServiceContainer;
