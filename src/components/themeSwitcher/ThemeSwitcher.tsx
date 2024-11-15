//Import react icons
import { FaMoon, FaSun } from "react-icons/fa";

//Import custom hook
import { useTheme } from "../../context/ThemeContext";

//Import sytled components
import { Slider, Switch } from "./ThemeSwitcher.styles";

/**
 *
 * @returns React functional component
 */
const ThemeSwitcher: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Switch onClick={toggleTheme} $isDarkTheme={isDarkTheme}>
      <Slider $isDarkTheme={isDarkTheme}>
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </Slider>
    </Switch>
  );
};

export default ThemeSwitcher;
