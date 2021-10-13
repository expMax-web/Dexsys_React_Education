import React from "react";
import { useState } from "react";

import { GetCharactersQuery } from "../../api/types";

import { CharacterCard } from "../CharacterCard/CharacterCard";
import { UpButton } from "../UpButton/UpButton";
import { Characters } from "../../api/types";

import styles from "./CardsContainer.module.scss";

interface CardsContainerProps {
  data: any;
}

export const CardsContainer: React.FC<CardsContainerProps> = ({ data }) => {
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
  console.log(data);

  return (
    <main className={styles.Container}>
      {data?.characters?.results.map((character: any) => (
        <CharacterCard
          image={character.image}
          name={character.name}
          key={character.id}
        />
      ))}
      {showScroll && <UpButton scrollToTop={scrollToTop}>Вверх</UpButton>}
    </main>
  );
};
