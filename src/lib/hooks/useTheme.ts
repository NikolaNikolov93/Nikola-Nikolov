import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

/**
 *
 * @returns the current state of the Theme with a toggle function to update the theme state
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
