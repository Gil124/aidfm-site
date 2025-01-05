import React from "react";
import Boss from "./Boss/Boss";
import Under from "./Under/Under";
import styles from "./Team.module.css";
import { nanoid } from "nanoid";
import joseVelosa from "../../assets/joseVelosa.jpg";
import antonioCarneiro from "../../assets/antonioCarneiro.jpg";
import isabelPavao from "../../assets/isabelPavao.jpg";
import eduardoMartins from "../../assets/eduardoMartins.jpg";
import orgSoc from "../../assets/orgSocial.svg";
import { getContent } from "../Navbar/Navbar";

const team = {
  id: "management",
  boss: [joseVelosa, antonioCarneiro],
  under: [isabelPavao, eduardoMartins],
};

function Team() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <hr className={styles.divider} />
        <h3 className={styles.title}>{getContent().org.title}</h3>
        <p className={styles.headerText}>{getContent().org.description}</p>
        <img src={orgSoc} alt="OrgSoc" className={styles.orgSoc} />
      </div>

      <div key={nanoid()} id={team.id} style={styles.mobile_centered}>
        <hr className={styles.divider} />
        <h3 className={styles.title}>{getContent().org.content.title}</h3>
        <div className={styles.team}>
          {team.boss.map((b, indexB) => (
            <Boss
              key={nanoid()}
              profile={b}
              name={getContent().org.content.content[indexB].name}
              role={getContent().org.content.content[indexB].role}
              description={getContent().org.content.content[indexB].description}
            />
          ))}
        </div>
        <div className={styles.team}>
          {team.under.map((u, indexU) => (
            <Under
              key={nanoid()}
              image={u}
              name={
                getContent().org.content.content[team.boss.length + indexU].name
              }
              position={
                getContent().org.content.content[team.boss.length + indexU].role
              }
              text={
                getContent().org.content.content[team.boss.length + indexU]
                  .description
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
