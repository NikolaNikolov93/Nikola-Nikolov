import { ReactNode, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  //Return the ThemeContext.Provider with the ThemeContext properties
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
