//Imports from styled-components
import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeContentContainer = styled.section`
  display: flex;
  gap: 1em;
  padding: 1em;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const HomeContainerElement = styled.div`
  flex-basis: calc((100% - 1em) / 2);
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
