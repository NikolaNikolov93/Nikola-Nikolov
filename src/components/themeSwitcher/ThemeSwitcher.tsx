import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
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

interface ThemeProps {
  $isDarkTheme: boolean;
}

const Switch = styled.button<ThemeProps>`
  width: 60px;
  height: 30px;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "#858585" : "#afafaf"};
  border-radius: 15px;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
`;
const Slider = styled.div<ThemeProps>`
  width: 26px;
  height: 26px;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "#f1c40f" : "#2c3e50"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  left: ${({ $isDarkTheme }) => ($isDarkTheme ? "32px" : "2px")};
  transition: left 0.3s ease;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#333" : "#ddd")};
  font-size: 16px;
`;
