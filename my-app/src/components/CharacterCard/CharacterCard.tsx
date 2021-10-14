import React from "react";

import { Maybe } from "../../api/types";

import styles from "./CharacterCard.module.css";
import { ImgNotFound } from "../ImgNotFound/ImgNotFound";

interface CardsContainerProps {
  image: Maybe<string> | undefined;
  name: Maybe<string> | undefined;
}

export const CharacterCard: React.FC<CardsContainerProps> = ({
  image,
  name,
}) => {
  return (
    <figure className={styles.CharacterCard}>
      {image && name ? (
        <p className={styles.ImgContainer}>
          <img src={image} alt={name} className={styles.CharacterImg} />
        </p>
      ) : (
        <ImgNotFound />
      )}
      <figcaption className={styles.CharactersName}>{name}</figcaption>
    </figure>
  );
};
