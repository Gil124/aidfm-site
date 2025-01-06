import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Project.module.css";
import { getLang, getProjects } from "../components/Navbar/Navbar";
import { LuMapPin, LuCalendar, LuExternalLink } from "react-icons/lu";
import { useEffect } from "react";

const ptText = {
  startDateUpcoming: "Começa:",
  startDateLive: "Começou:",
  endDateLive: "Acaba:",
  endDatePast: "Acabou:",
  knowMore: "Saiba Mais",
};

const enText = {
  startDateUpcomming: "Starts:",
  startDateLive: "Started:",
  endDateLive: "Ends:",
  endDatePast: "Ended:",
  knowMore: "Know More",
};

const baseMapsUrl = "https://www.google.com/maps/search/?api=1&query=";

function Project() {
  const [isLive, setLive] = useState("upcoming");
  const [text, setText] = useState(ptText);
  const { id } = useParams();

  const projects = getProjects();
  const project = projects[id];
  const projectTitle = project.title;
  const projectDescription = project.description;
  const projectImage = project.img;
  const projectStartDate = project.startDate;
  const projectEndDate = project.endDate;
  const projectUrl = project.moreURL;
  const projectLocation = project.location;

  let startDate = new Date(projectStartDate);
  let endFDate = new Date(projectEndDate);
  let todaysDate = new Date();

  useEffect(() => {
    if (todaysDate < startDate) {
      setLive("upcoming");
    } else if (todaysDate > endFDate) {
      setLive("past");
    } else {
      setLive("live");
    }
  }, [todaysDate, startDate, endFDate]);

  useEffect(() => {
    if (getLang() === "EN") {
      setText(enText);
    } else {
      setText(ptText);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{projectTitle}</h1>
        <img
          src={projectImage}
          alt={projectTitle}
          className={styles.image}
          sizes="contain"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{projectDescription}</p>
        <div className={styles.tags}>
          {projectStartDate &&
            projectEndDate &&
            (projectStartDate !== projectEndDate ? (
              <>
                <div
                  className={
                    isLive == "live"
                      ? styles.timeTagLive
                      : isLive == "upcoming"
                      ? styles.timeTagUpcoming
                      : styles.timeTagPast
                  }
                >
                  <LuCalendar />
                  <p>
                    {isLive == "upcoming"
                      ? text.startDateUpcoming
                      : text.startDateLive}
                  </p>
                  <p className={styles.value}>{projectStartDate}</p>
                </div>
                <div
                  className={
                    isLive == "live"
                      ? styles.timeTagLive
                      : isLive == "upcoming"
                      ? styles.timeTagUpcoming
                      : styles.timeTagPast
                  }
                >
                  <LuCalendar />
                  <p>
                    {isLive == "past" ? text.endDatePast : text.endDateLive}
                  </p>
                  <p className={styles.value}>{projectEndDate}</p>
                </div>
              </>
            ) : (
              <div
                className={
                  isLive == "live"
                    ? styles.timeTagLive
                    : isLive == "upcoming"
                    ? styles.timeTagUpcoming
                    : styles.timeTagPast
                }
              >
                <LuCalendar />
                <p className={styles.value}>{projectStartDate}</p>
              </div>
            ))}
          {projectLocation && (
            <a
              className={styles.locationTag}
              href={baseMapsUrl + projectLocation}
            >
              <LuMapPin />
              <p className={styles.value}>{projectLocation}</p>
            </a>
          )}

          {projectUrl && (
            <a href={projectUrl} className={styles.knowMoreButton}>
              {text.knowMore}
              <LuExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
