import React from "react";

import styles from "./CharacterCard.module.css";

interface CardsContainerProps {
  image: any;
  name: any;
}

export const CharacterCard: React.FC<CardsContainerProps> = ({
  image,
  name,
}) => {
  return (
    <figure className={styles.CharacterCard}>
      <p className={styles.ImgContainer}>
        <img src={image} alt={name} className={styles.CharacterImg} />
      </p>
      <figcaption className={styles.CharactersName}>{name}</figcaption>
    </figure>
  );
};
