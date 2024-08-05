import React from "react";
import ServicesContainer from "../components/Services/ServicesContainer";
import { nanoid } from "nanoid";
import service1 from "../assets/service1.jpeg"
import service2 from "../assets/service2.jpeg"
import service3 from "../assets/service3.jpeg"
import service4 from "../assets/service4.jpeg"
import service5 from "../assets/service5.jpeg"
import service6 from "../assets/service6.jpeg"
import { getContent } from "../components/Navbar/Navbar";

const services = [
  {
    id:"events",
    src: service1,
    desc: "event room",
    title: "Organização de Eventos",
    text: ["A organização de eventos tem vindo a desempenhar um papel cada vez mais significativo na atualidade a nível económico e social.", "Na AIDFM contamos já com mais de XXXX eventos realizados, destacamo-nos principalmente por congressos e cursos pós-graduados, que promovem o melhoramento de técnicas médicas e cirúrgicas. Desde então temos cada vez mais procurado evoluir, de modo a continuarmos a ter um impacto significativo na vida de vários profissionais de saúde e organizações."],
  },
  {
    id:"admin",
    src: service2,
    desc: "person working on computer",
    title: "Gestão Administrativa",
    text: ["A gestão administrativa, de recursos humanos e financeira, são as grandes áreas essenciais para o devido funcionamento de qualquer organização.", "Na AIDFM contamos com estas áreas separadas por departamentos, coordenados por líderes especializados e preparados para trabalhar em equipa, pois apesar de diferentes, estes temas são interdependentes e todos trabalham em conjunto, de modo a garantir o nosso sucesso e sustentabilidade."],
  },
  {
    id:"costs",
    src: service3,
    desc: "graph",
    title: "Minimização de Custos",
    text: ["Na AIDFM, mais propriamente no nosso departamento financeiro, procuramos estabelecer estratégias e práticas, onde analisamos detalhadamente custos, negociamos com parceiros, planeamos e estabelecemos orçamentos para que possamos estabelecer o bom funcionamento económico e social na nossa organização."],
  },
  {
    id:"services",
    src: service4,
    desc: "airplane",
    title: "Aquisição de Serviços",
    text: ["Na AIDFM, mais propriamente no nosso departamento financeiro, procuramos estabelecer estratégias e práticas, onde analisamos detalhadamente custos, negociamos com parceiros, planeamos e estabelecemos orçamentos para que possamos estabelecer o bom funcionamento económico e social na nossa organização."],
  },
  {
    id:"project",
    src: service5,
    desc: "person doing a report on the computer",
    title: "Relatórios de Projeto",
    text: ["Na AIDFM, mais propriamente no nosso departamento financeiro, procuramos estabelecer estratégias e práticas, onde analisamos detalhadamente custos, negociamos com parceiros, planeamos e estabelecemos orçamentos para que possamos estabelecer o bom funcionamento económico e social na nossa organização."],
  },
  {
    id:"research",
    src: service6,
    desc: "lab",
    title: "Apoio à Investigação",
    text: ["O apoio à investigação é o principal foco da AIDFM. Fornecemos apoio a financiamentos, à atribuição de bolsas de estudo, a organizações e ainda à coordenação e divulgação científica.", "Através da investigação, pretendemos cada vez mais impulsionar o avanço da ciência e do conhecimento, resultando na aprendizagem de novas técnicas, tratamentos médicos e descobertas nos diferentes campos da medicina.", "Este apoio é fundamental para o progresso, não só da nossa organização, mas também para o desenvolvimento científicos."],
  },
];

function Services() {
  return (
    <>
      <div>
        {services.map((service, index) => (
          <ServicesContainer
            key={nanoid()}
            image={service.src}
            desc={service.desc}
            title={getContent().services[index].title}
            text={getContent().services[index].description}
            border={index === services.length - 1 ? "0 0 40px 0" : "0px"}
            id={service.id}
          />
        ))}
      </div>
      <h1 className="title-link" style={{margin:"20vh 0", fontSize:"32pt"}}>
        Contacte <a href="">Aqui</a> a Nossa Equipa e Deixe-nos Ajudar
      </h1>
    </>
  );
}

export default Services;
