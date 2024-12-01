import { Link } from "react-router-dom";
import styled from "styled-components";
import { $StyledDivProps } from "../../lib/types/types";
import { motion } from "motion/react";

export const Card = styled(motion.div)`
  flex-basis: calc((100% - 2 * 1em) / 3);
  transition: ease 0.4s;
  border-radius: 40px;
  overflow: hidden;
  @media (min-width: 100px) and (max-width: 767px) {
    flex-basis: calc(100%);
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-basis: calc((100% - 1em) / 2);
  }
  @media (min-width: 1024px) {
    flex-basis: calc((100% - 2 * 1em) / 3);
  }
`;
export const StyledLink = styled(Link)`
  border: 1px solid white;
  border-radius: 50px;
  padding: 1em;
  background-color: ${({ theme }) => theme.accentSecondary};
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.accentPrimary};
    color: ${({ theme }) => theme.textPrimary};
  }
`;

export const StyledImgDiv = styled.div<$StyledDivProps>`
  position: relative;
  height: 50dvh;
  background-image: url(${(props) => props.$url});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 2;

  h3,
  ${StyledLink} {
    z-index: 3;
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
    color: ${({ theme }) => theme.textPrimary};
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    text-align: center;
    border: none;
  }

  &::before,
  in-view & {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.divider};
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  &:hover {
    h3 {
      display: block;
      opacity: 1;
    }

    &::before {
      display: block;
      opacity: 1;
    }
    ${StyledLink} {
      display: block;
      opacity: 1;
    }
  }
  @media (max-width: 766px) {
    &.in-view {
      h3 {
        display: block;
        opacity: 1;
      }

      &::before {
        display: block;
        opacity: 1;
      }

      ${StyledLink} {
        display: block;
        opacity: 1;
      }
    }
  }
`;
