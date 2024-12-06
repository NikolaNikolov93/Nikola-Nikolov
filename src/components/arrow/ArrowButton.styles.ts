import { motion } from "motion/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
type ArrowProps = {
  $isUp: boolean;
};

export const ArrowPlaceholder = styled(motion(Link))<ArrowProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50px;
  right: 20px;
  width: 45px;
  height: 45px;
  background-color: ${({ theme }) => theme.divider};
  border-radius: 50px;
  z-index: 100;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
`;
export const Arrow = styled(motion.div)<ArrowProps>`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 2em;
`;
