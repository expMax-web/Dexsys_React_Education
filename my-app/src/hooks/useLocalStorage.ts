export const useLocalStorage = (initialValue: boolean) => {
  const getTheme = () => {
    const localTheme = localStorage.getItem("isDark");
    if (localTheme) {
      return JSON.parse(localTheme);
    }
    return initialValue;
  };

  const setTheme = (isDark: boolean) => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  };

  return { getTheme, setTheme };
};
