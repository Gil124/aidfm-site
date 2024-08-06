import React from "react";
import { getContent } from "../Navbar/Navbar";
import styles from "./Information.module.css";
import { TbFileDownload } from "react-icons/tb";
import doc1 from "../../assets/files/DiarioRep.pdf";
import doc2 from "../../assets/files/Estatutos AIDFM 2003.pdf";
import doc3 from "../../assets/files/Doc Igualdade de Genero PT.pdf";

function Information() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {getContent().infoInst.content[0].title}
        </h1>
        <div className={styles.content_container}>
          <p className={styles.text}>
            {getContent().infoInst.content[0].description}
          </p>
          <a href={doc1} download>
            <div className={styles.document_container}>
              <TbFileDownload className={styles.logo} />
            </div>
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {getContent().infoInst.content[1].title}
        </h1>
        <div className={styles.content_container}>
          <p className={styles.text}>
            {getContent().infoInst.content[1].description}
          </p>
          <a href={doc2} download>
            <div className={styles.document_container}>
              <TbFileDownload className={styles.logo} />
            </div>
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {getContent().infoInst.content[2].title}
        </h1>
        <div className={styles.content_container}>
          <p className={styles.text}>
            {getContent().infoInst.content[2].description}
          </p>
          <a href={doc3} download>
            <div className={styles.document_container}>
              <TbFileDownload className={styles.logo} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Information;
