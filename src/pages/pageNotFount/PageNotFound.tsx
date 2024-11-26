import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.accentSecondary};
`;

const SubHeading = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.textPrimary};
`;

const BackLink = styled(Link)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: ${({ theme }) => theme.accentSecondary};
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentPrimary};
  }
`;

const Illustration = styled.div`
  img {
    width: 60dvw;
    max-width: 500px;
    height: auto;
  }
`;

// 404 Component
const PageNotFound: React.FC = () => {
  return (
    <PageContainer>
      <SubHeading>Page Not Found</SubHeading>
      <Description>
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </Description>
      <BackLink to="/">Go Back Home</BackLink>
      <Illustration>
        <img src="/404.png" alt="" />
      </Illustration>
    </PageContainer>
  );
};

export default PageNotFound;
