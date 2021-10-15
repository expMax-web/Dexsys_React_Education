import React from "react";

import { Maybe } from "../../api/types";
import { InfoItem } from "../InfoItem/InfoItem";

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
          <InfoItem title="Gender:" value={gender || "unknow"} />
          <InfoItem title="Created date:" value={created || "unknow"} />
          <InfoItem title="Status:" value={status || "unknow"} />
          <InfoItem title="Species:" value={species || "unknow"} />
          <InfoItem
            title="Name of location:"
            value={locationName || "unknow"}
          />
          <InfoItem
            title="Type of location:"
            value={locationType || "unknow"}
          />
          <InfoItem
            title="Location dimension:"
            value={locationDimension || "unknow"}
          />
          <InfoItem
            title="Location creation date:"
            value={locationCreated || "unknow"}
          />
        </div>
      </div>
    </main>
  );
};
