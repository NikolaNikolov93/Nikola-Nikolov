import { motion } from "motion/react";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3em;
  padding: 1em;
`;

export const AboutWrapper = styled.div`
  flex-basis: 100%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.textPrimary};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    overflow-x: hidden;
  }
  @media (max-width: 760px) {
    &::after {
      display: none;
    }
  }
`;

export const ListItem = styled(motion.li)`
  display: flex;
  gap: 1em;
  height: auto;
  align-items: center;

  span {
    color: ${({ theme }) => theme.accentSecondary};
  }

  &:nth-child(odd) {
    flex-direction: row;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  @media (max-width: 760px) {
    &:nth-child(odd) {
      flex-direction: column;
    }

    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;
export const ListP = styled(motion.p)`
  flex-basis: calc((100% - 1em) / 2);
  padding: 0 1em;
`;
export const ListImg = styled(motion.img)`
  flex-basis: calc((100% - 1em) / 2);
  height: auto;
  width: 100%;
  max-width: 100%;
  max-height: 45vh;
  object-fit: cover;
  border-radius: 40px;
  padding: 0 1em;
`;

export const CertifcatesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  h1 {
    text-align: center;
  }
`;
export const Footer = styled.div`
  padding-bottom: 3.5em;
  position: relative;
`;
