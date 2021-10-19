import React from "react";

type Theme = {
  isDark?: boolean;
  setIsDark: (isDark: boolean) => void;
};

export const ThemeContext = React.createContext<Theme>({
  isDark: false,
  setIsDark: (isDark: boolean) => {},
});
