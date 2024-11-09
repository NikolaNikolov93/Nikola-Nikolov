import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle to {isDarkTheme ? "Light" : "Dark"} theme
    </button>
  );
};

export default ThemeSwitcher;
