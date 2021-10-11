import React from "react";
import classes from "./CharacterCard.module.css";

const CharacterCard = ({ children, ...props }) => {
  return (
    <figure className={classes.CharacterCard}>
      <p className={classes.ImgContainer}>
        <img src="" alt="" />
      </p>
      <figcaption className={classes.CharactersName}></figcaption>
    </figure>
  );
};

export default CharacterCard;
