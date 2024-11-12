import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navigation = () => {
  return (
    <StyledNavigation>
      <ThemeSwitcher />
      <Bio>
        <h1>Nikola Nikolov</h1>
        <h3>Frontend Developer</h3>
        <h4>I am ready to bring creativity and functionality to the web.</h4>
      </Bio>
      <StyledList>
        <StyledLink to={"/"}>
          <DecorationLine />
          <p>Home</p>
        </StyledLink>
        <StyledLink to={"/about"}>
          <DecorationLine />
          <p>About</p>
        </StyledLink>
        <StyledLink to={"/contacts"}>
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
    </StyledNavigation>
  );
};

export default Navigation;
const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: start;

  h1 {
    color: ${({ theme }) => theme.accentSecondary};
  }
  h3 {
    color: ${({ theme }) => theme.textPrimary};
  }
  h4 {
    color: ${({ theme }) => theme.textSecondary};
  }
  p {
    width: 100%;
    height: 100%;
    background-image: url("/profile-pic.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

const StyledNavigation = styled.nav`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100vh;
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1em;
  align-items: start;
  padding: 1em;
  margin: 0;
  font-size: 1.3em;
`;
const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.textSecondary};
  transition: color 0.3s ease, transform 0.3s ease;
  position: relative;
  p {
    margin: 0; /* Remove default margins */
    padding-left: 1em; /* Add space between the text and line */
    position: relative; /* Ensure it's the reference for the line */
  }

  &.active,
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.textPrimary};
    transform: translateX(30%);
  }
`;
const StyledSocialList = styled.ul`
  display: flex;
  padding: 0.5em;
  gap: 1em;
  align-items: center;
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

  ${StyledLink}:hover & {
    width: 100%;
    background-color: ${({ theme }) => theme.textSecondary};
  }
  ${StyledLink}.active & {
    width: 100%;
    background-color: ${({ theme }) => theme.textSecondary};
  }
`;
