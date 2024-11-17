import styled from "styled-components";

export const CertificateImage = styled.div<{
  $certificateImgUrl: string;
  $x: number;
  $y: number;
}>`
  background-image: url(${(props) => props.$certificateImgUrl});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-size 0.4s ease-in-out;
  &:hover {
    background-size: 130%; /* Initial zoom level */
    background-position: ${(props) => `${props.$x}% ${props.$y}%`};
    overflow: hidden;
  }
`;
export const CertificateInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 1em;
  span {
    color: ${({ theme }) => theme.accentSecondary};
  }
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 1em;

  ${CertificateImage},${CertificateInfo} {
    flex-basis: calc((100% - 1em) / 2);
    height: 80vh;
  }
`;
