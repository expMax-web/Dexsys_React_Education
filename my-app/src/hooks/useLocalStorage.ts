export const useLocalStorage = (initialValue: boolean, isDark: string) => {
  const getTheme = () => {
    const localTheme = localStorage.getItem(isDark);
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
