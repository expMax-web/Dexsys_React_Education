import React from "react";

import styles from "./InfoItem.module.css";

interface InfoItemProps {
  title: string;
  value: string | null | undefined;
}

export const InfoItem: React.FC<InfoItemProps> = ({ value, title }) => {
  return (
    <div className={styles.CharacterInfoItem}>
      <span className={styles.CharacterInfoItemDescription}>{title}:</span>
      <span className={styles.CharacterInfoItemValue}>
        {value || "unknown"}
      </span>
    </div>
  );
};
