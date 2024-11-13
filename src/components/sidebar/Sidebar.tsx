import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaFacebook } from "react-icons/fa";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

type SidebarProps = {
  $isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ $isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer $isOpen={$isOpen}>
      <CloseButton onClick={toggleSidebar}>✕</CloseButton>
      <StyledList>
        <ThemeSwitcherContainer>
          <ThemeSwitcher />
        </ThemeSwitcherContainer>

        <StyledLink to="/" onClick={toggleSidebar}>
          <DecorationLine />
          <p>Home</p>
        </StyledLink>
        <StyledLink to="/about" onClick={toggleSidebar}>
          <DecorationLine />
          <p>About</p>
        </StyledLink>
        <StyledLink to="/contacts" onClick={toggleSidebar}>
          <DecorationLine />
          <p>Contacts</p>
        </StyledLink>
      </StyledList>
      <StyledSocialList>
        <li>
          <a
            href="https://www.linkedin.com/in/nikola-nikolov-a53b2925a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/NikolaNikolov93"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/nikola.nikolov.77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
      </StyledSocialList>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2em 1em;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease;
  z-index: 1000;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5em;
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;
`;
const ThemeSwitcherContainer = styled.div`
  padding: 1em;
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-size: 1.3em;
`;

const StyledLink = styled(NavLink)`
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

const StyledSocialList = styled.ul`
  display: flex;
  gap: 1em;
  margin-top: auto;
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

const DecorationLine = styled.div`
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
