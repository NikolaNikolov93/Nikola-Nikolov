//Import styled components
import { HomeBio, HomeContentContainer, StyledImg } from "./Home.styles";

/**
 *
 * @returns React functional component
 */
const Home: React.FC = () => {
  return (
    <HomeContentContainer>
      <HomeBio>
        <h1>Nikola Nikolov</h1>
        <h3>Frontend Developer</h3>
        <h4>I am ready to bring creativity and functionality to the web.</h4>
      </HomeBio>
      <StyledImg>
        <img src="/profile-pic.png" alt="profile-pic" />
      </StyledImg>
    </HomeContentContainer>
  );
};

export default Home;
