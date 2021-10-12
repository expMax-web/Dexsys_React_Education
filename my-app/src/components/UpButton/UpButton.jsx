import styles from "./UpButton.module.css";

export const UpButton = ({ children, scrollToTop }) => {
  return (
    <button onClick={scrollToTop} className={styles.ButtonUp}>
      {children}
    </button>
  );
};
