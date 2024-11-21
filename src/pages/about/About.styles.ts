import { motion } from "motion/react";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 1em;
  text-align: center;
`;

export const AboutWrapper = styled.div`
  margin-bottom: 2em;
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
  max-height: 50vh;
  object-fit: cover;
  border-radius: 40px;
  padding: 0 1em;
`;

export const CertifcatesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 2em;
  h1 {
    text-align: center;
  }
`;
