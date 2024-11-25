//Imports from styled-components
import styled from "styled-components";

export const HomeContentContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomeContainerElement = styled.div`
  flex-basis: 100%;

  @media (min-width: 481px) {
    flex-basis: calc((100% - 1em) / 2);
  }
`;

export const StyledImg = styled(HomeContainerElement)``;

export const HomeBio = styled(HomeContainerElement)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5em;

  h1 {
    color: ${({ theme }) => theme.accentSecondary};
  }
  h2 {
    color: ${({ theme }) => theme.textPrimary};
  }
  h3 {
    color: ${({ theme }) => theme.textSecondary};
  }
`;
