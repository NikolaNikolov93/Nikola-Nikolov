//React imports
import { createContext, ReactNode, useState } from "react";
import { ThemeContextType } from "../lib/types/types";

//Create context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
//Create context provider
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
