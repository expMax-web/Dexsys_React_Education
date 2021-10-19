import { useContext } from "react";
import { ThemeContext } from "../context";

export const useTheme = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return { isDark, setIsDark };
};
