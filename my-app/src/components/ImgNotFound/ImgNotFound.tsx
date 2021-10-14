import React from "react";

import styles from "./ImgNotFound.module.css";
import image from "./img_not_found.png";

export const ImgNotFound: React.FC = () => {
  return (
    <p className={styles.ImgContainer}>
      <img
        src={image}
        alt="Изображение не найдено"
        className={styles.CharacterImg}
      />
    </p>
  );
};
