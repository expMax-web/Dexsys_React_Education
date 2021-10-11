import React from "react";
import classes from "./UpButton.module.css";

const UpButton = ({ children, ...props }) => {
  return <button className={classes.ButtonUp}>{children}</button>;
};

export default UpButton;
