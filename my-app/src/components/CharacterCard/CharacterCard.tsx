import React from "react";
import { Link } from "react-router-dom";

import { Maybe } from "../../api/types";
import { ImgNotFound } from "../ImgNotFound/ImgNotFound";

import styles from "./CharacterCard.module.css";

interface CardsContainerProps {
  image: Maybe<string> | undefined;
  name: Maybe<string> | undefined;
  id: Maybe<string> | undefined;
}

export const CharacterCard: React.FC<CardsContainerProps> = ({
  image,
  name,
  id,
}) => {
  return (
    <Link to={`/character/${id}`} className={styles.Link}>
      <figure className={styles.CharacterCard} id={id || ""}>
        {image && name ? (
          <p className={styles.ImgContainer}>
            <img src={image} alt={name} className={styles.CharacterImg} />
          </p>
        ) : (
          <ImgNotFound />
        )}
        <figcaption className={styles.CharactersName}>{name}</figcaption>
      </figure>
    </Link>
  );
};
