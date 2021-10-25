import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDarkTheme } from "../../hooks/useDarkTheme";
import cn from "classnames";

import styles from "./SkeletonCharacterPage.module.scss";

export const SkeletonCharacterPage: FC = () => {
  const { isDark } = useDarkTheme();
  return (
    <div
      className={cn(styles.Container, {
        [styles.Container_Dark]: isDark,
      })}
    >
      <Skeleton
        baseColor={isDark ? "#3a3b3b" : ""}
        className={styles.SkeletonBackButton}
      />
      <Skeleton
        baseColor={isDark ? "#23262b" : ""}
        className={styles.SkeletonCharacterInfoCard}
      />
    </div>
  );
};
