import React from "react";

import { Maybe } from "../../api/types";

import styles from "./CharacterInfoCard.module.css";

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
  return (
    <main className={styles.MainContainer}>
      <div className={styles.CharacterCardContainer}>
        <figure className={styles.CharacterImg}>
          <img src={image || ""} alt={name || ""} />
        </figure>
        <div className={styles.CharacterInfoContainer}>
          <div className={styles.CharacterNameContainer}>
            <span>{name}</span>
          </div>
          <div className={styles.CharacterInfoItem}>
            <span className={styles.CharacterInfoItemDescription}>Gender:</span>
            <span className={styles.CharacterInfoItemValue}>{gender}</span>
          </div>
          <div className={styles.CharacterInfoItem}>
            <span className={styles.CharacterInfoItemDescription}>
              Created date:
            </span>
            <span className={styles.CharacterInfoItemValue}>{created}</span>
          </div>
          <div className={styles.CharacterInfoItem}>
            <span className={styles.CharacterInfoItemDescription}>Status:</span>
            <span className={styles.CharacterInfoItemValue}>{status}</span>
          </div>
          <div className={styles.CharacterInfoItem}>
            <span className={styles.CharacterInfoItemDescription}>
              Species:
            </span>
            <span className={styles.CharacterInfoItemValue}>{species}</span>
          </div>
          <div className={styles.CharacterInfoItem}>
            <span className={styles.CharacterInfoItemDescription}>
              Name of location:
            </span>
            <span className={styles.CharacterInfoItemValue}>
              {locationName}
            </span>
          </div>
          <div className={styles.CharacterInfoItem}>
            <span className={styles.CharacterInfoItemDescription}>
              Type of location:
            </span>
            <span className={styles.CharacterInfoItemValue}>
              {locationType}
            </span>
          </div>
          <div className={styles.CharacterInfoItem}>
            <span className={styles.CharacterInfoItemDescription}>
              Location dimension:
            </span>
            <span className={styles.CharacterInfoItemValue}>
              {locationDimension}
            </span>
          </div>
          <div className={styles.CharacterInfoItem}>
            <span className={styles.CharacterInfoItemDescription}>
              Location creation date:
            </span>
            <span className={styles.CharacterInfoItemValue}>
              {locationCreated}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
