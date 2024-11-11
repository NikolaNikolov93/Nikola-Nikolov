import styled from "styled-components";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { useTheme } from "../../context/ThemeContext";
import { lightTheme, darkTheme } from "../../../styles/theme/theme";

interface StyledNavigationContainerProps {
  $isDarkTheme: boolean;
}
const Navigation = () => {
  const { isDarkTheme } = useTheme();

  return (
    <StyledNavigationContainer $isDarkTheme={isDarkTheme}>
      <StyledNavigation>
        <StyledList>
          <StyledLink to={"/home"}>Home</StyledLink>

          <StyledLink to={"/about"}>About</StyledLink>

          <StyledLink to={"/contacts"}>Contacts</StyledLink>
        </StyledList>
        <ThemeSwitcher />
      </StyledNavigation>
    </StyledNavigationContainer>
  );
};

export default Navigation;

const StyledNavigationContainer = styled.section<StyledNavigationContainerProps>`
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? darkTheme.divider : lightTheme.divider};
  margin: 0;
`;

const StyledNavigation = styled.nav`
  padding: 1em;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  padding: 1em;
  margin: 0;
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.textPrimary};
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.textSecondary};
  }
`;
