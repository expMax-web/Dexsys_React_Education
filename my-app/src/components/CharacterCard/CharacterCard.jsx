import React from "react";
import classes from "./CharacterCard.module.css";

const CharacterCard = ({image, name}) => {
  return (
    <figure className={classes.CharacterCard}>
      <p className={classes.ImgContainer}>
        <img src={image} alt="" className={classes.CharacterImg}/>
      </p>
      <figcaption className={classes.CharactersName}>{name}</figcaption>
    </figure>
  );
};

export default CharacterCard;
