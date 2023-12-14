import React from 'react'
import styles  from './ObjectiveContainer.module.css'

function ObjectiveContainer({image, desc, title, text}) {
  return (
    <>
    <div className={styles.container}>
      {<img src={image} alt={desc} className={styles.img}/>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
    </>
  )
}

export default ObjectiveContainer