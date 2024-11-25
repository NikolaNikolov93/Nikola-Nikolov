//Import ThemeSwitcher component that handles the change from Light to Dark theme.
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

//Import React icons.
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

//Import styled components.
import {
  StyledNavigation,
  StyledList,
  StyledLink,
  StyledSocialList,
  DecorationLine,
  StyledListElement,
} from "./Navigation.styles";

/**
 *
 * @returns React functional component --> Navigation for wide screens.
 */
const Navigation: React.FC = () => {
  return (
    <>
      <StyledNavigation>
        <ThemeSwitcher />
        <StyledList>
          <StyledListElement>
            <StyledLink to={"/"}>
              <DecorationLine />
              <p>Home</p>
            </StyledLink>
          </StyledListElement>
          <StyledListElement>
            <StyledLink to={"/about"}>
              <DecorationLine />
              <p>About</p>
            </StyledLink>
          </StyledListElement>
          <StyledListElement>
            <StyledLink to={"/contacts"}>
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
      </StyledNavigation>
    </>
  );
};

export default Navigation;
