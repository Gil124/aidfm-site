import React from 'react'
import styles from './Values.module.css'
import ValuesContainer from './ValuesContainer/ValuesContainer'

function Values() {
  return (
    <div id='values' className={styles.container}>
      <ValuesContainer logo='0' title='Conhecimento'/>
      <ValuesContainer logo='1' title='Inovação'/>
      <ValuesContainer logo='2' title='Qualidade'/>
      <ValuesContainer logo='3' title='Transparência'/>
      <ValuesContainer logo='4' title='Responsabilidade'/>
      <ValuesContainer logo='5' title='Proximidade'/>
      <ValuesContainer logo='6' title='Flexibilidade e Cooperação'/>
    </div>
  )
}

export default Values