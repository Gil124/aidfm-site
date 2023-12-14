import React from 'react'
import styles from './InstInfo.module.css'
import { PiLinkSimpleLight } from "react-icons/pi";

function InstInfo() {
  return (
    <div className={styles.info}><button className={styles.button}>
    Informação Institucional
    <PiLinkSimpleLight />
  </button></div>
  )
}

export default InstInfo