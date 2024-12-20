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
  StyledListElement,
  StyledSocialList,
  ThemeSwitcherContainer,
} from "./Sidebar.styles";
import { SidebarProps } from "../../lib/types/types";
import { useSwipeable } from "react-swipeable";

/**
 *
 * @param param0 isOpen is a boolean that gives info weather the sidebar is open and is used for stylization. toggleSidebar is toggle function that switches the state.
 * @returns React functional component
 */
const Sidebar: React.FC<SidebarProps> = ({ $isOpen, toggleSidebar }) => {
  // Swipeable handler
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if ($isOpen) toggleSidebar(); // Close sidebar on swipe left
    },
    preventScrollOnSwipe: true, // Prevent scrolling while swiping
    trackMouse: true, // Enables swipe gestures on desktop for testing
  });
  return (
    <SidebarContainer $isOpen={$isOpen} {...swipeHandlers}>
      <CloseButton onClick={toggleSidebar} aria-label="closeButton">
        <AiOutlineCloseSquare />
      </CloseButton>
      <StyledList>
        <StyledListElement>
          <ThemeSwitcherContainer>
            <ThemeSwitcher />
          </ThemeSwitcherContainer>
        </StyledListElement>
        <StyledListElement>
          <StyledLink to="/" onClick={toggleSidebar}>
            <DecorationLine />
            <p>Home</p>
          </StyledLink>
        </StyledListElement>
        <StyledListElement>
          <StyledLink to="/about" onClick={toggleSidebar}>
            <DecorationLine />
            <p>About</p>
          </StyledLink>
        </StyledListElement>
        <StyledListElement>
          <StyledLink to="/contacts" onClick={toggleSidebar}>
            <DecorationLine />
            <p>Contacts</p>
          </StyledLink>
        </StyledListElement>
      </StyledList>
      <StyledSocialList>
        <li>
          <a
            href="https://www.linkedin.com/in/nikola-nikolov-a53b2925a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
          >
            <CiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/NikolaNikolov93"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/nikola.nikolov.77"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook"
          >
            <FaFacebook />
          </a>
        </li>
      </StyledSocialList>
    </SidebarContainer>
  );
};

export default Sidebar;
