import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.nav<{
  $isOpen: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100dvh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2em 1em;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-120%)"};
  transition: transform 0.7s ease;
  z-index: 1000;
  box-shadow: 5px 0 12px -2px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  font-size: 3em;
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;
`;
export const ThemeSwitcherContainer = styled.div`
  padding: 1em;
`;
export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-size: 1.3em;
`;
export const StyledListElement = styled.li``;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.textSecondary};
  transition: color 0.3s ease, transform 0.3s ease;
  position: relative;

  p {
    margin: 0;
    padding-left: 1em;
    position: relative;
  }

  &.active,
  &:hover {
    color: ${({ theme }) => theme.textPrimary};
    transform: translateX(20%);
  }
`;

export const StyledSocialList = styled.ul`
  display: flex;
  gap: 1em;
  font-size: 1.8em;

  a {
    color: ${({ theme }) => theme.accentSecondary};
  }

  li {
    transition: transform 0.3s ease;
  }

  li:hover {
    transform: scale(1.5);
  }
`;

export const DecorationLine = styled.div`
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.textPrimary};
  transition: width 0.3s ease, background-color 0.3s ease;

  ${StyledLink}:hover &,
  ${StyledLink}.active & {
    width: 100%;
    background-color: ${({ theme }) => theme.textSecondary};
  }
`;
