import React from "react";
import styles from "./ResearchCenters.module.css";
import ResearchCC from "./Container/ResearchCC";
import { nanoid } from "nanoid";
import rc1 from "../../assets/ci1.jpeg"
import rc2 from "../../assets/ci2.jpeg"
import rc3 from "../../assets/ci3.jpeg"
import rc4 from "../../assets/ci4.jpeg"
import rc5 from "../../assets/ci5.jpeg"

const centers = [
  {
    id: "CCUL",
    src: rc1,
    desc: "doctors",
    title: "CCUL",
    subtitile: "(Centro Cardiovascular da Universidade de Lisboa)",
    text: "Um instituto de investigação biomédica empenhado em melhorar a saúde e os cuidados de saúde em todo o mundo, seguindo o padrão de excelência em investigação, cuidados clínicos e educação médica.",
  },
  {
    id: "ISAMB",
    src: rc2,
    desc: "green space",
    title: "ISAMB",
    subtitile: "(Instituto de Saúde Ambietal)",
    text: "É um centro de investigação inteiramente dedicado à saúde ambiental.",
  },
  {
    id: "CEMBE",
    src: rc3,
    desc: "surgery",
    title: "CEMBE",
    subtitile: "(Centro de Estudos de Medicina Baseada na Evidência)",
    text: "Uma unidade estrutural da Faculdade de Medicina da Universidade de Lisboa, criado com o objetivo de difundir os princípios da medicina baseada na evidência.",
  },
  {
    id: "bioethic",
    src: rc4,
    desc: "researcher",
    title: "Centro de Bioética",
    subtitile: "",
    text: "Tem como objetivos gerais promover o estudo e divulgação de conhecimentos científicos, investigar, formar e/ ou colaborar na formação no âmbito da bioética, bem como estabelecer os contactos nacionais e internacionais que para isso considerar necessários.",
  },
  {
    id: "egas",
    src: rc5,
    desc: "brain",
    title: "Centro de Estudos Egas Moniz",
    subtitile: "",
    text: "Unidades de Investigação com o objetivo a Investigação Científica na área que hoje designamos por Neurociências Clínicas, e que inclui a neurologia, a neurocirurgia e a psiquiatria.",
  },
];

function ResearchCenters() {
  return (
    <>
      <div className={styles.page}>
        {centers.map((center) => (
          <ResearchCC
            key={nanoid()}
            id={center.id}
            image={center.src}
            desc={center.desc}
            title={center.title}
            subtitle={center.subtitile}
            text={center.text}
          />
        ))}
      </div>
    </>
  );
}

export default ResearchCenters;
