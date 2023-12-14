import React from 'react'
import styles from './Objectives.module.css'
import ObjectiveContainer from './ObjectiveContainer/ObjectiveContainer'
import { nanoid } from 'nanoid'

const obj = [
  {
  src:"/src/assets/obj1.jpeg",
  desc:"lab",
  title:"Realizar",
  text:"formações e divulgações técnicas da FMUL"
},
{
  src:"/src/assets/obj2.jpeg",
  desc:"investigation lab",
  title:"Promover",
  text:"e apoiar atividades de investigação"
},{
  src:"/src/assets/obj3.jpeg",
  desc:"Business meeting",
  title:"Divulgar",
  text:"e aplicar resultados de pesquisas no meio empresarial"
},{
  src:"/src/assets/obj4.jpeg",
  desc:"person studying",
  title:"Conceder",
  text:"bolsas de estudo e subsídios para ensino e pesquisa"
},{
  src:"/src/assets/obj5.jpeg",
  desc:"person signing paper",
  title:"Registar",
  text:"e explorar patentes"
},{
  src:"/src/assets/obj6.jpeg",
  desc:"trophy",
  title:"Participar",
  text:"em concursos nacionais e internacionais"
},{
  src:"/src/assets/obj7.jpeg",
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