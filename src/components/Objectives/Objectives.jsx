import React from 'react'
import styles from './Objectives.module.css'
import ObjectiveContainer from './ObjectiveContainer/ObjectiveContainer'
import { nanoid } from 'nanoid'
import obj1 from '../../assets/obj1.jpeg'
import obj2 from '../../assets/obj2.jpeg'
import obj3 from '../../assets/obj3.jpeg'
import obj4 from '../../assets/obj4.jpeg'
import obj5 from '../../assets/obj5.jpeg'
import obj6 from '../../assets/obj6.jpeg'
import obj7 from '../../assets/obj7.jpeg'

const obj = [
  {
  src:obj1,
  desc:"lab",
  title:"Realizar",
  text:"formações e divulgações técnicas da FMUL"
},
{
  src:obj2,
  desc:"investigation lab",
  title:"Promover",
  text:"e apoiar atividades de investigação"
},{
  src:obj3,
  desc:"Business meeting",
  title:"Divulgar",
  text:"e aplicar resultados de pesquisas no meio empresarial"
},{
  src:obj4,
  desc:"person studying",
  title:"Conceder",
  text:"bolsas de estudo e subsídios para ensino e pesquisa"
},{
  src:obj5,
  desc:"person signing paper",
  title:"Registar",
  text:"e explorar patentes"
},{
  src:obj6,
  desc:"trophy",
  title:"Participar",
  text:"em concursos nacionais e internacionais"
},{
  src:obj7,
  desc:"lab",
  title:"Apoiar",
  text:"a montagem de laboratórios"
}]



function Objectives() {
  return (
    <>
    <h2 className='title-about'>Objetivos</h2>
    <div className={styles.container}>
      {obj.map((objective) => (
        <ObjectiveContainer key={nanoid()} image={objective.src} desc={objective.desc} title={objective.title} text={objective.text}/>
      ))}
    </div>
    </>
  )
}

export default Objectives