import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MiniMenu.module.css";
import { nanoid } from "nanoid";
import { IoChevronDownOutline } from "react-icons/io5";
import { getContent } from "../Navbar/Navbar";

const menu = [
  {
    sub: [],
  },
  {
    sub: [
      { title: "Direção", ref: "/about/team#management" },
      { title: "Assembleia Geral", ref: "/about/team#assembly" },
      { title: "Conselho Fiscal", ref: "/about/team#counsil" },
    ],
  },
  {
    sub: [
      { title: "CCUL", ref: "/about/ci#CCUL" },
      { title: "ISAMB", ref: "/about/ci#ISAMB" },
      { title: "CEMBE", ref: "/about/ci#CEMBE" },
      { title: "Centro de Bioética", ref: "/about/ci#bioethic" },
      { title: "Centro de Estudos Egas Moniz", ref: "/about/ci#egas" },
    ],
  },
];

function MiniMenu({ page }) {
  const [currentMenu, setCurrentMenu] = useState(page);
  const [dropped, setDropped] = useState(false);

  const handleMenuClick = (index) => {
    setCurrentMenu(index);
  };

  const getCurrentTitle = () => {
    return menu[currentMenu].title;
  };

  const handleDropdownClick = () => {
    requestAnimationFrame(() => {
      setDropped(!dropped);
    });
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>{getContent().navbar.titles[0].title}</h2>
        {getContent().navbar.subtitles[0].map((title, index) => (
          <div key={nanoid()}>
            <Link
              to={title.url}
              className={styles.mains}
              onClick={() => handleMenuClick(index)}
            >
              {title.title}
            </Link>
            {index === currentMenu && (
              <div>
                {title.sub.map((subtitle) => (
                  <div key={nanoid()}>
                    <a href={subtitle.url} className={styles.subs}>
                      {subtitle.title}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.dropdown} onClick={() => handleDropdownClick()}>
        <div className={styles.dropdownTitle}>
          {getCurrentTitle()}
          <IoChevronDownOutline className={styles.arrowDown} />
        </div>
        <div
          className={styles.dropdownContent}
          style={dropped ? { display: "block" } : { display: "none" }}
        >
          {getContent().navbar.subtitles[0].map((title, index) => (
            <div key={nanoid()}>
              <Link
                to={title.url}
                className={styles.dropdownOption}
                onClick={() => handleMenuClick(index)}
              >
                {title.title}
              </Link>
              {index === currentMenu && (
                <div>
                  {title.sub.map((subtitle) => (
                    <div key={nanoid()}>
                      <a href={subtitle.url} className={styles.dropdownOption}>
                        {subtitle.title}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MiniMenu;
