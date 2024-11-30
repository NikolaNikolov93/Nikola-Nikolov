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
        <h2>Frontend Developer</h2>
        <h3>I am ready to bring creativity and functionality to the web.</h3>
      </HomeBio>
      <StyledImg>
        <img src="/home-png.png" alt="profile-pic" />
      </StyledImg>
    </HomeContentContainer>
  );
};

export default Home;
