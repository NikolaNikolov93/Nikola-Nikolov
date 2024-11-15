import styled from "styled-components";

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

const HomeContentContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
  }
`;
const HomeContainerElement = styled.div`
  flex-basis: 100%;

  @media (min-width: 481px) {
    flex-basis: calc((100% - 1em) / 2);
  }
`;

const StyledImg = styled(HomeContainerElement)``;

const HomeBio = styled(HomeContainerElement)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5em;

  h1 {
    color: ${({ theme }) => theme.accentSecondary};
  }
  h3 {
    color: ${({ theme }) => theme.textPrimary};
  }
  h4 {
    color: ${({ theme }) => theme.textSecondary};
  }
`;
