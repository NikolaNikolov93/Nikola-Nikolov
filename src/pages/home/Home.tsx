import styled from "styled-components";

const Home = () => {
  return (
    <HomeContentContainer>
      <HomeContainerElement>
        <h2>Hello! I’m Nikola!</h2>
        <h4>
          I am afuture Frontend Developer ready to bring creativity and
          functionality to the web.
        </h4>
      </HomeContainerElement>
      <HomeContainerElement>
        <img src="/profile-pic.png" alt="" />
      </HomeContainerElement>
    </HomeContentContainer>
  );
};

export default Home;

const HomeContentContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;
const HomeContainerElement = styled.div`
  flex-basis: calc((100% - 1em) / 2);
  h2 {
    color: ${({ theme }) => theme.accentSecondary};
  }
`;
