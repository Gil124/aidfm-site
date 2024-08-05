import React from 'react'
import styles from './InstInfo.module.css'
import { PiLinkSimpleLight } from "react-icons/pi";
import { getContent } from '../Navbar/Navbar';

function InstInfo() {
  return (
    <div className={styles.info}><button className={styles.button}>
    {getContent().about.infoInst}
    <PiLinkSimpleLight />
  </button></div>
  )
}

export default InstInfo