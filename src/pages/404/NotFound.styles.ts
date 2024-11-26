import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components

export const PageContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.accentSecondary};
`;

export const SubHeading = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.textPrimary};
`;

export const BackLink = styled(Link)`
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

export const Illustration = styled.div`
  img {
    width: 60dvw;
    max-width: 500px;
    height: auto;
  }
`;
