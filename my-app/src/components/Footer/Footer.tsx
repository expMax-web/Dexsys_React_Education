import React from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";
import { FeedBackForm } from "../FeedBackForm/FeedBackForm";

import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const { isDark } = useDarkTheme();
  return (
    <footer
      className={cn(styles.Footer, {
        [styles.Footer_Dark]: isDark,
      })}
    >
      <FeedBackForm />
    </footer>
  );
};
