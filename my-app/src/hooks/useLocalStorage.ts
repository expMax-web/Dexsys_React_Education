import { useEffect, useState } from "react";

export const useLocalStorage = (initialValue: boolean, isDark: string) => {
  const getTheme = () => {
    const localTheme = localStorage.getItem(isDark);

    if (localTheme) {
      return JSON.parse(localTheme);
    }
    return initialValue;
  };

  const [value, setValue] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
