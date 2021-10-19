import React from "react";
import cn from "classnames";

import { Maybe } from "../../api/types";
import { InfoItem } from "../InfoItem/InfoItem";
import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./CharacterInfoCard.module.scss";

interface CharacterInfoCardProps {
  image: Maybe<string> | undefined;
  name: Maybe<string> | undefined;
  gender: Maybe<string> | undefined;
  created: Maybe<string> | undefined;
  status: Maybe<string> | undefined;
  species: Maybe<string> | undefined;
  locationName: Maybe<string> | undefined;
  locationType: Maybe<string> | undefined;
  locationDimension: Maybe<string> | undefined;
  locationCreated: Maybe<string> | undefined;
}

export const CharacterInfoCard: React.FC<CharacterInfoCardProps> = ({
  image,
  name,
  gender,
  created,
  status,
  species,
  locationName,
  locationType,
  locationDimension,
  locationCreated,
}) => {
  const { isDark } = useDarkTheme();
  return (
    <main
      className={cn(styles.MainContainer, {
        [styles.MainContainer_Dark]: isDark,
      })}
    >
      <div
        className={cn(styles.CharacterCardContainer, {
          [styles.CharacterCardContainer_Dark]: isDark,
        })}
      >
        <figure className={styles.CharacterImg}>
          <img src={image || ""} alt={name || ""} />
        </figure>
        <div className={styles.CharacterInfoContainer}>
          <div
            className={cn(styles.CharacterNameContainer, {
              [styles.CharacterNameContainer_Dark]: isDark,
            })}
          >
            <span>{name}</span>
          </div>
          <InfoItem title="Gender" value={gender} />
          <InfoItem title="Created date" value={created} />
          <InfoItem title="Status" value={status} />
          <InfoItem title="Species" value={species} />
          <InfoItem title="Name of location" value={locationName} />
          <InfoItem title="Type of location" value={locationType} />
          <InfoItem title="Location dimension" value={locationDimension} />
          <InfoItem title="Location creation date" value={locationCreated} />
        </div>
      </div>
    </main>
  );
};
