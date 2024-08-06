import React from "react";
import styles from "./InstInfo.module.css";
import { PiLinkSimpleLight } from "react-icons/pi";
import { getContent } from "../Navbar/Navbar";

function InstInfo() {
  //go to the docs page
 const handlePress = () => {
    window.location.href = "/about/docs";
  }

  return (
    <div className={styles.info}>
      <button className={styles.button} onClick={handlePress}>
        {getContent().about.infoInst}
        <PiLinkSimpleLight />
      </button>
    </div>
  );
}

export default InstInfo;
