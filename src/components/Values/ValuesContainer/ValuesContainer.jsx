import React from "react";
import {
  IoBookOutline,
  IoBulbOutline,
  IoRibbonOutline,
  IoEyeOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { LiaUserTieSolid, LiaHandshakeSolid } from "react-icons/lia";
import styles from './ValuesContainer.module.css'

function ValuesContainer({ logo, title }) {

  return (
    <div className={styles.container}>
    {logo === 0 && <IoBookOutline className={styles.logo} />}
    {logo === 1 && <IoBulbOutline className={styles.logo} />}
    {logo === 2 && <IoRibbonOutline className={styles.logo} />}
    {logo === 3 && <IoEyeOutline className={styles.logo} />}
    {logo === 4 && <LiaUserTieSolid className={styles.logo} />}
    {logo === 5 && <IoPeopleOutline className={styles.logo} />}
    {logo === 6 && <LiaHandshakeSolid className={styles.logo} />}
      <h2 className={styles.title} >{title}</h2>
    </div>
  );
}

export default ValuesContainer;
