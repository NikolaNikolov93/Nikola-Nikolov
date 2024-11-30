import { motion } from "motion/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
type ArrowProps = {
  isUp: boolean;
};

export const ArrowPlaceholder = styled(motion(Link))<ArrowProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 45px;
  height: 45px;
  background-color: ${({ theme }) => theme.divider};
  border-radius: 50px;
`;
export const Arrow = styled(motion.div)<ArrowProps>`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 2em;
`;
