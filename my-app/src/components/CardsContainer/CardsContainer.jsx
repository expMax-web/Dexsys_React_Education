import { useState, useEffect } from "react";

import { CharacterCard } from "../CharacterCard/CharacterCard";
import { UpButton } from "../UpButton/UpButton";

import styles from "./CardsContainer.module.scss";

export const CardsContainer = ({ data }) => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
      console.log(1);
    }
    if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const scrollToTop = () => {
    console.log("GoUp");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShowScroll(false);
  };
  return (
    <main className={styles.Container}>
      {data?.characters?.results.map((character) => (
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
