import React, { useState, useEffect, useRef } from "react";
import styles from "./DataContainer.module.css";
import {
  LuUsers,
  LuMicroscope,
  LuBriefcase,
  LuTestTube2,
} from "react-icons/lu";
import { Fade } from "react-awesome-reveal";

function AnimatedNumber({ start, end, duration, startFlag }) {
  const [animatedValue, setAnimatedValue] = useState(start);
  const startTimestamp = useRef(new Date().getTime()/600000000);

  const step = (timestamp) => {
    if (startFlag) {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp.current) / duration,
        1
      );
      setAnimatedValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
  };

  useEffect(() => {
    if (startFlag) {
      window.requestAnimationFrame(step);
    }
  }, [startFlag, duration]);

  return <span>{animatedValue}</span>;
}

function DataContainer({ icon, title, number }) {
  const [shown, setShown] = useState(false);
  const icons = {
    employees: LuUsers,
    projects: LuMicroscope,
    partners: LuBriefcase,
    investigators: LuTestTube2,
  };

  function changeV() {
    setShown(true);
  }

  const IconComponent = icons[icon] || null;

  return (
    <Fade fraction={0.25} cascade onVisibilityChange={() => changeV()}>
      <div className={styles.container}>
        {IconComponent && <IconComponent className={styles.icon} />}
        <p className={styles.title}>{title}</p>
        <h3 className={styles.number}>
          <AnimatedNumber
            start={0}
            end={number}
            duration={2000}
            startFlag={!shown}
          />
        </h3>
      </div>
    </Fade>
  );
}

export default DataContainer;
