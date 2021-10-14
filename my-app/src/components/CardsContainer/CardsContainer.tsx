import React from "react";
import { useState } from "react";

import { CharacterCard } from "../CharacterCard/CharacterCard";
import { UpButton } from "../UpButton/UpButton";
import { Maybe, Character } from "../../api/types";

import styles from "./CardsContainer.module.scss";

interface CardsContainerProps {
  characters: Maybe<Character[]>;
}

export const CardsContainer: React.FC<CardsContainerProps> = ({
  characters,
}) => {
  const [showScroll, setShowScroll] = useState<Boolean>(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    }
    if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  const scrollToTop = () => {
    console.log("GoUp");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShowScroll(false);
  };
  console.log(characters);

  return (
    <main className={styles.Container}>
      {characters &&
        characters
          ?.filter((character) => character)
          .map((character: Character) => (
            <CharacterCard
              image={character.image}
              name={character.name}
              key={character.id}
            />
          ))}
      {showScroll && <UpButton scrollToTop={scrollToTop}>▲</UpButton>}
    </main>
  );
};
