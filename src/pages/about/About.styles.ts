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
  @media (max-width: 910px) {
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
  flex: 1 1 100%;
  span {
    color: ${({ theme }) => theme.accentSecondary};
  }

  &:nth-child(odd) {
    flex-direction: row;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  @media (max-width: 910px) {
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
  max-width: 100%;
  max-height: 45dvh;
  object-fit: cover;
  object-position: top;
  border-radius: 40px;
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
  padding-left: 3em;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;

  img {
    object-fit: contain;
    object-position: center;
  }
`;
export const FooterStyledA = styled(motion.a)`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.accentSecondary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s;
  margin-bottom: 1em;

  &:hover {
    background-color: ${({ theme }) => theme.accentPrimary};
  }
`;
