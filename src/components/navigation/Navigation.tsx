import styled from "styled-components";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const Navigation = () => {
  return (
    <StyledNavigation>
      <ThemeSwitcher />
      <StyledList>
        <li>
          <StyledLink to={"/home"}>Home</StyledLink>
        </li>
        <li>
          <StyledLink to={"/about"}>About</StyledLink>
        </li>
        <li>
          <StyledLink to={"/contacts"}>Contacts</StyledLink>
        </li>
      </StyledList>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  padding: 1em;
  border: 1px solid black;
  box-shadow: 5px 5px 5px black;
  display: flex;
  margin-bottom: 1em;
`;
const StyledList = styled.ul`
  display: flex;
  gap: 1em;
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.accentPrimary};
  &:hover {
    color: ${({ theme }) => theme.accentSecondary};
  }
`;
