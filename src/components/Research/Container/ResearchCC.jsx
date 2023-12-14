import React from 'react'
import styles from './ResearchCC.module.css'

function ResearchCC({image, desc, title, subtitle, text, id}) {
  return (
    <div id={id} className={styles.container}>
      <img src={image} alt={desc} className={styles.img}/>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default ResearchCC