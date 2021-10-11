import React from "react";

import styles from "./UpButton.module.css";

export const UpButton = ({ children, scroll}) => {
  const scrollToTop = () => {
    console.log("GoUp");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <button onClick={scrollToTop} className={styles.ButtonUp}>{children}</button>;
};


