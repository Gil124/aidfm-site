import React from "react";
import styles from "./DropdownMenu.module.css";

function DropdownMenu({ on, names, leave }) {
  return (
    <div
      className={styles.container}
      style={
        on
          ? {
              opacity: "1",
              transform: "translateY(0)",
              pointerEvents: "auto",
              width:"auto"
            }
          : {}
      }
      onMouseLeave={leave}
    >
      DropdownMenu
    </div>
  );
}

export default DropdownMenu;
