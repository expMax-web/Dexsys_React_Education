import { useContext } from "react";
import { ThemeContext } from "../context";

export const useDarkTheme = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return { isDark, setIsDark };
};
