//Import NavLink to use the "active" class to style the links when active
import { NavLink } from "react-router-dom";

//Import styled from styled-components library
import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

//Styled component for the Navigation Wrapper.
export const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 80vh;
  padding: 1em;
`;

//Styled component for the navigation UL.
export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: flex-start;
  font-size: 1.3em;
`;
export const StyledListElement = styled.li``;
//Styled component for the NavLinks.
export const StyledLink = styled(NavLink)<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.textSecondary};
  transition: color 0.3s ease, transform 0.3s ease;
  position: relative;
  p {
    margin: 0; /* Remove default margins */
    position: relative; /* Ensure it's the reference for the line */
  }

  &.active,
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.textPrimary};
    transform: translateX(15%);
  }
`;

//Styled component for the decoration line under the NavLinks
export const DecorationLine = styled.div<{ theme: DefaultTheme }>`
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.textPrimary};
  transition: width 0.3s ease, background-color 0.3s ease;

  ${StyledLink}:hover & {
    width: 100%;
    background-color: ${({ theme }) => theme.textSecondary};
  }
  ${StyledLink}.active & {
    width: 100%;
    background-color: ${({ theme }) => theme.textSecondary};
  }
`;

//Styled Component for the social media Wrapper.
export const StyledSocialList = styled.ul<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: flex-start;
  gap: 1em;
  width: 100%;
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
  @media (min-width: 481px) and (max-width: 850px) {
    font-size: 1em;
  }
`;
