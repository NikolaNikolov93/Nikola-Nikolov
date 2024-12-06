import styled from "styled-components";
import { SideBaroButtonProps } from "./lib/types/types";
import { DefaultTheme } from "styled-components/dist/types";

export const AppContainer = styled.div<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  /* Hide scrollbar for Webkit browsers */
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: auto;
  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for older Edge and IE */
  -ms-overflow-style: none;
`;
export const MainSection = styled.section`
  max-width: 1440px;
  margin: auto;
  height: 100dvh;
  display: flex;
  padding: 2em;
`;
export const AppStaticSection = styled.section`
  position: sticky;
  top: 0;
  width: 25dvw;
  padding: 2em;
  @media (max-width: 800px) {
    text-align: start;
    h1,
    h2,
    h4 {
      font-size: 1em;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
export const AppDynamicSection = styled.section`
  width: 70dvw;
  padding: 2em;
  @media (max-width: 600px) {
    width: 100dvw;
  }
`;
export const SidebarButton = styled.button<SideBaroButtonProps>`
  display: none;
  position: fixed;
  top: 1em;
  left: 1em;
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;

  @media (max-width: 600px) {
    display: ${({ $isOpen }) => ($isOpen ? "none" : "block")};
    color: ${({ theme }) => theme.textPrimary};
  }
`;
