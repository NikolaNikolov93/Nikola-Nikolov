//React imports
import { createContext } from "react";
import { ThemeContextType } from "../lib/types/types";

//Create context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
//Create context provider
