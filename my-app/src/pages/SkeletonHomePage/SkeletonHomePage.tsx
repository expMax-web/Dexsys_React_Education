import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDarkTheme } from "../../hooks/useDarkTheme";
import cn from "classnames";

import styles from "./SkeletonHomePage.module.scss";

export const SkeletonHomePage: FC = () => {
  const { isDark } = useDarkTheme();
  let Skeletons = [];
  for (let i = 0; i < 8; i++) {
    Skeletons[i] = (
      <Skeleton
        baseColor={isDark ? "#3a3b3b" : ""}
        className={styles.SkeletonCharacterCard}
      />
    );
  }
  return (
    <div
      className={cn(styles.Container, {
        [styles.Container_Dark]: isDark,
      })}
    >
      {Skeletons}
    </div>
  );
};
