//Import react icons
import { FaMoon, FaSun } from "react-icons/fa";

//Import custom hook

//Import sytled components
import { Slider, Switch } from "./ThemeSwitcher.styles";
import { useTheme } from "../../lib/hooks/useTheme";

/**
 *
 * @returns React functional component
 */
const ThemeSwitcher: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Switch
      onClick={toggleTheme}
      $isDarkTheme={isDarkTheme}
      aria-label="themeSwitch"
    >
      <Slider $isDarkTheme={isDarkTheme}>
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </Slider>
    </Switch>
  );
};

export default ThemeSwitcher;
