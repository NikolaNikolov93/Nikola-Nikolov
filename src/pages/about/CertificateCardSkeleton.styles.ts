import { motion } from "motion/react";
import styled from "styled-components";

export const CertificateCardSkeletonDiv = styled(motion.div)`
  flex-basis: calc((100% - 2 * 1em) / 3);
  transition: ease 0.4s;
  border-radius: 40px;
  overflow: hidden;
  height: 50dvh;
  background-color: ${({ theme }) => theme.divider};
  opacity: 0.3;
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
