//React icons import
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";

//Theme switcher import
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

//Styled components import
import {
  CloseButton,
  DecorationLine,
  SidebarContainer,
  StyledLink,
  StyledList,
  StyledSocialList,
  ThemeSwitcherContainer,
} from "./Sidebar.styles";
import { SidebarProps } from "../../lib/types/types";

/**
 *
 * @param param0 isOpen is a boolean that gives info weather the sidebar is open and is used for stylization. toggleSidebar is toggle function that switches the state.
 * @returns React functional component
 */
const Sidebar: React.FC<SidebarProps> = ({ $isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer $isOpen={$isOpen}>
      <CloseButton onClick={toggleSidebar} aria-label="closeButton">
        <AiOutlineCloseSquare />
      </CloseButton>
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
