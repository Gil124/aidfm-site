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
import { getContent } from "../Navbar/Navbar";

const teams = [
  {
    id: "management",
    boss: [joseVelosa, antonioCarneiro],
    under: [ruiTato, isabelPavao, eduardoMartins],
  },
  {
    id: "assembly",
    boss: [faustoPinto, fernandoGodinho],
    under: [ruiPortugal],
  },
  {
    id: "counsil",
    boss: [alexandreRibeiro],
    under: [mariaDiogenes, mamedeCarvalho],
  },
];

function Team() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <hr className={styles.divider} />
        <h3 className={styles.title}>{getContent().org.title}</h3>
        <p className={styles.headerText}>{getContent().org.description}</p>
      </div>
      {teams.map((team, index) => (
        <div key={nanoid()} id={team.id}>
          <hr className={styles.divider} />
          <h3 className={styles.title}>{getContent().org.content[index].title}</h3>
          <div className={styles.team}>
            {team.boss.map((b, indexB) => (
              <Boss
                key={nanoid()}
                profile={b}
                name={getContent().org.content[index].content[indexB].name}
                role={getContent().org.content[index].content[indexB].role}
                description={
                  getContent().org.content[index].content[indexB].description
                }
              />
            ))}
          </div>
          <div className={styles.team}>
            {team.under.map((u, indexU) => (
              <Under
                key={nanoid()}
                image={u}
                name={getContent().org.content[index].content[team.boss.length + indexU].name}
                position={getContent().org.content[index].content[team.boss.length + indexU].role}
                text={getContent().org.content[index].content[team.boss.length + indexU].description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
