import React from "react";
import classes from "./UpButton.module.css";



const UpButton = ({ children, scroll}) => {
  const scrollToTop = () => {
    console.log("GoUp");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <button onClick={scrollToTop} className={classes.ButtonUp}>{children}</button>;
};

export default UpButton;


