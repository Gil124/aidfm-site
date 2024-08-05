import React from 'react'
import styles from './Values.module.css'
import ValuesContainer from './ValuesContainer/ValuesContainer'
import { getContent } from '../Navbar/Navbar'
import { nanoid } from 'nanoid'

function Values() {
  return (
    <div id='values' className={styles.container}>
      {getContent().about.mission.content.values.map((value, index) => (
        <ValuesContainer key={nanoid()} logo={index} title={value} />
      ))}
    </div>
  )
}

export default Values