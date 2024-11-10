import styled from "styled-components";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const Navigation = () => {
  return (
    <StyledNavigation>
      <ThemeSwitcher />
      <StyledList>
        <StyledLink to={"/home"}>Home</StyledLink>

        <StyledLink to={"/about"}>About</StyledLink>

        <StyledLink to={"/contacts"}>Contacts</StyledLink>
      </StyledList>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  padding: 1em;
  box-shadow: 5px 5px 5px black;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  align-items: center;
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
  color: ${({ theme }) => theme.accentPrimary};
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.accentSecondary};
  }
`;
