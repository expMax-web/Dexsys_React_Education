import React from "react";
import { Link } from "react-router-dom";

import styles from "./BackButton.module.css";

export const BackButton: React.FC = ({ children }) => {
  return (
    <Link to={`/home`}>
      <button className={styles.BackButton}>{children}</button>
    </Link>
  );
};
