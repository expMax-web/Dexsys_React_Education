import { useEffect, useState } from "react";

import { useLocalStorage } from "./useLocalStorage";

export const useThemeState = () => {
  const { getTheme, setTheme } = useLocalStorage(false);

  const [value, setValue] = useState(getTheme);

  useEffect(() => {
    setTheme(value);
  }, [value]);

  return [value, setValue];
};
