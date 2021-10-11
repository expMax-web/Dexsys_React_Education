import React from "react";

import {CharacterCard} from "../CharacterCard/CharacterCard";
import {UpButton} from "../UpButton/UpButton";

import styles from "./CardsContainer.module.scss";

export const CardsContainer = ({data}) => {
  return (
    <main className={styles.Container}>
    {data?.characters?.results.map((character) => (
      <CharacterCard image={character.image} name={character.name} />
    ))}
    <UpButton>Вверх</UpButton>
  </main>
  );
};
