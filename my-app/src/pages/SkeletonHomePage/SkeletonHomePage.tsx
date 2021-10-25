import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./SkeletonHomePage.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonHomePage: FC = () => {
  const { isDark } = useDarkTheme();
  return (
    <div
      className={cn(styles.Container, {
        [styles.Container_Dark]: isDark,
      })}
    >
      <Skeleton
        baseColor={isDark ? "#3a3b3b" : ""}
        className={styles.SkeletonCharacterCard}
      />
      <Skeleton
        baseColor={isDark ? "#3a3b3b" : ""}
        className={styles.SkeletonCharacterCard}
      />
      <Skeleton
        baseColor={isDark ? "#3a3b3b" : ""}
        className={styles.SkeletonCharacterCard}
      />
      <Skeleton
        baseColor={isDark ? "#3a3b3b" : ""}
        className={styles.SkeletonCharacterCard}
      />
      <Skeleton
        baseColor={isDark ? "#3a3b3b" : ""}
        className={styles.SkeletonCharacterCard}
      />
      <Skeleton
        baseColor={isDark ? "#3a3b3b" : ""}
        className={styles.SkeletonCharacterCard}
      />
      <Skeleton
        baseColor={isDark ? "#3a3b3b" : ""}
        className={styles.SkeletonCharacterCard}
      />
      <Skeleton
        baseColor={isDark ? "#3a3b3b" : ""}
        className={styles.SkeletonCharacterCard}
      />
    </div>
  );
};
