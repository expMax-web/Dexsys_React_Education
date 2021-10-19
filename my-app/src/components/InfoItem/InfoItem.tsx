import React from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./InfoItem.module.scss";

interface InfoItemProps {
  title: string;
  value: string | null | undefined;
}

export const InfoItem: React.FC<InfoItemProps> = ({ value, title }) => {
  const { isDark } = useDarkTheme();
  return (
    <div
      className={cn(styles.CharacterInfoItem, {
        [styles.CharacterInfoItem_Dark]: isDark,
      })}
    >
      <span className={styles.CharacterInfoItemDescription}>{title}:</span>
      <span className={styles.CharacterInfoItemValue}>
        {value || "unknown"}
      </span>
    </div>
  );
};
