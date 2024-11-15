import styled from "styled-components";
import { ThemeProps } from "../../lib/types/types";

export const Switch = styled.button<ThemeProps>`
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
export const Slider = styled.div<ThemeProps>`
  width: 26px;
  height: 26px;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "#F7F7F7" : "#10182d"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  left: ${({ $isDarkTheme }) => ($isDarkTheme ? "32px" : "2px")};
  transition: left 0.3s ease;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#FF8C42" : "#FF6347")};
  font-size: 16px;
`;
