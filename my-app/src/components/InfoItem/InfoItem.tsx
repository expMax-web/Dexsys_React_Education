import React, { Children } from "react";

import styles from "./InfoItem.module.css";

interface InfoItemProps {
  title: string;
  value: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ value, title }) => {
  return (
    <div className={styles.CharacterInfoItem}>
      <span className={styles.CharacterInfoItemDescription}>{title}</span>
      <span className={styles.CharacterInfoItemValue}>{value}</span>
    </div>
  );
};
