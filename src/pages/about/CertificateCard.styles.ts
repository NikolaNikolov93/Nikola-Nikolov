import { Link } from "react-router-dom";
import styled from "styled-components";
import { $StyledDivProps } from "../../lib/types/types";

export const Card = styled.div`
  flex-basis: calc((100% - 2 * 1em) / 3);
  transition: ease 0.4s;
  border-radius: 50px;
  overflow: hidden;
`;
export const StyledLink = styled(Link)`
  border: 1px solid white;
  border-radius: 50px;
  padding: 1em;
`;

export const StyledImgDiv = styled.div<$StyledDivProps>`
  position: relative;
  height: 50vh;
  background-image: url(${(props) => props.$url});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 2; /* Ensure it's above the overlay */

  h3,
  ${StyledLink} {
    z-index: 3; /* Ensure text is above the overlay */
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Adds depth */
    color: ${({ theme }) => theme.textPrimary};
    opacity: 0; /* Use opacity for smooth fade-in */
    transition: opacity 0.5s ease-in-out; /* Smooth transition for appearance */
    text-align: center;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.divider};
    z-index: 1;
    opacity: 0; /* Use opacity for smooth fade-in */
    transition: opacity 0.5s ease-in-out; /* Smooth transition for appearance */
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
`;
