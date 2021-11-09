import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { Maybe } from "../../api/types";
import { ImgNotFound } from "../ImgNotFound/ImgNotFound";
import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./CharacterCard.module.scss";

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
  const { isDark } = useDarkTheme();
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
        <figcaption
          className={cn(styles.CharactersName, {
            [styles.CharactersName_Dark]: isDark,
          })}
        >
          {name}
        </figcaption>
      </figure>
    </Link>
  );
};
