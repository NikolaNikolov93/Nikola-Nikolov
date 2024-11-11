import styled from "styled-components";

const MainPageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyledMainPageContainer>{children}</StyledMainPageContainer>;
};

export default MainPageContainer;

const StyledMainPageContainer = styled.section`
  max-width: 1440px;
  margin: auto;
  padding: 0 1em;
`;
