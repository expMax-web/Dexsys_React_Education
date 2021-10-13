import React from "react";

import styles from "./UpButton.module.css";

interface UpButtonProps {
  scrollToTop: () => void;
}

export const UpButton: React.FC<UpButtonProps> = ({
  children,
  scrollToTop,
}) => {
  return (
    <button onClick={scrollToTop} className={styles.ButtonUp}>
      {children}
    </button>
  );
};
