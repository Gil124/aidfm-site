import React from "react";
import Boss from "./Boss/Boss";
import Under from "./Under/Under";
import styles from "./Team.module.css";
import { nanoid } from "nanoid";
import joseVelosa from "../../assets/joseVelosa.jpg";
import antonioCarneiro from "../../assets/antonioCarneiro.jpg";
import ruiTato from "../../assets/ruiTato.jpg";
import isabelPavao from "../../assets/isabelPavao.jpg";
import eduardoMartins from "../../assets/eduardoMartins.jpg";
import faustoPinto from "../../assets/faustoPinto.jpg";
import fernandoGodinho from "../../assets/fernandoGodinho.jpg";
import ruiPortugal from "../../assets/ruiPortugal.jpg";
import alexandreRibeiro from "../../assets/alexandreRibeiro.png";
import mariaDiogenes from "../../assets/mariaDiogenes.jpg";
import mamedeCarvalho from "../../assets/mamedeCarvalho.jpg";

const teams = [
  {
    title: "Direção",
    id: "management",
    boss: [
      {
        src: joseVelosa,
        name: "Prof. Doutor José Fernando de Freitas Velosa",
        position: "Presidente",
        text: "Na empresa líder em inovação sediada em Lisboa, o chefe exemplar, Sr. António Silva, é uma fonte inesgotável de inspiração para todos os funcionários. Com uma ética de trabalho incansável e uma visão clara para o futuro da empresa, ele lidera com paixão e determinação. Sob sua liderança, a equipe floresce, impulsionada pelo seu compromisso com a excelência e pelo seu apoio incansável às ideias inovadoras. O Sr. Silva não apenas valoriza o profissionalismo, mas também cultiva um ambiente de trabalho colaborativo, onde a criatividade é incentivada e as contribuições de cada indivíduo são reconhecidas. Sua abordagem calorosa e orientada para as pessoas cria uma atmosfera positiva, transformando o escritório em um local onde todos se sentem valorizados e motivados para alcançar o sucesso.",
      },
      {
        src: antonioCarneiro,
        name: "Prof. Doutor António CândidoVaz Carneiro",
        position: "Vice-Presidente",
        text: "Professor doutor médico de família contribui na vida",
      },
    ],
    under: [
      {
        src: ruiTato,
        name: "Prof. Doutor Rui Tato Marinho",
        position: "Secretário",
        text: "",
      },
      {
        src: isabelPavao,
        name: "Profª. Doutora Maria Isabel Pavão Petiz",
        position: "Vogal",
        text: "",
      },
      {
        src: eduardoMartins,
        name: "Prof. Doutor António Eduardo Pais Falcão Barbosa Martins",
        position: "Vogal",
        text: "",
      },
    ],
  },
  {
    title: "Assembleia Geral",
    id: "assembly",
    boss: [
      {
        src: faustoPinto,
        name: "Prof. Doutor Fausto José da Conceição Alexandre Pinto",
        position: "Presidente",
        text: "",
      },
      {
        src: fernandoGodinho,
        name: "Prof. Doutor Fernando Manuel Godinho Rodrigues",
        position: "Vice-Presidente",
        text: "",
      },
    ],
    under: [
      {
        src: ruiPortugal,
        name: "Prof. Doutor Rui Gentil de Portugal e Vasconcelos Fernandes",
        position: "Secretário",
        text: "",
      },
    ],
  },
  {
    title: "Conselho Fiscal",
    id: "counsil",
    boss: [
      {
        src: alexandreRibeiro,
        name: "Prof. Doutor Joaquim Alexandre Ribeiro",
        position: "Presidente",
        text: "",
      },
    ],
    under: [
      {
        src: mariaDiogenes,
        name: "Profª. Doutora Maria José Diógenes",
        position: "Vogal",
        text: "",
      },
      {
        src: mamedeCarvalho,
        name: "Prof. Doutor Mamede Alves de Carvalho",
        position: "Vogal",
        text: "",
      },
    ],
  },
];

function Team() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <hr className={styles.divider} />
        <h3 className={styles.title}>Orgãos Sociais</h3>
        <p className={styles.headerText}>
          As nossa equipas são formadas por membros de elite de todas as àreas
          da medicina, dividos em: Assembleia Geral, Conselho Fiscal e Direção.
        </p>
      </div>
      {teams.map((team) => (
        <div key={nanoid()} id={team.id}>
          <hr className={styles.divider} />
          <h3 className={styles.title}>{team.title}</h3>
          <div className={styles.team}>
            {team.boss.map((b) => (
              <Boss
                key={nanoid()}
                profile={b}
              />
            ))}
          </div>
          <div className={styles.team}>
          {team.under.map((u) => (
              <Under
                key={nanoid()}
                image={u.src}
                name={u.name}
                position={u.position}
                text={u.text}
              />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
