import styled from "styled-components";

export const CertificateImage = styled.div<{
  $certificateImgUrl: string;
}>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$certificateImgUrl});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
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
export const CertificateImageWrapper = styled.div``;

export const Wrapper = styled.div`
  display: flex;

  ${CertificateImageWrapper},${CertificateInfo} {
    flex-basis: calc((100% - 1em) / 2);
    height: 80dvh;
  }
  @media (max-width: 760px) {
    flex-wrap: wrap;
    ${CertificateImageWrapper},${CertificateInfo} {
      flex-basis: 100%;
      height: 50dvh;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: ${({ theme }) =>
    //Takes the theme.divider hex color, removes the # and takes the RGB characters and converts to decimal.
    `rgba(${parseInt(theme.divider.slice(1, 3), 16)}, 
          ${parseInt(theme.divider.slice(3, 5), 16)}, 
          ${parseInt(theme.divider.slice(5, 7), 16)}, 0.8)`};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: auto; /* Enable scrolling */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Ensure content starts at the top */
  background: white;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 2em;
  cursor: pointer;

  @media (max-width: 860px) {
    display: block;
  }
`;
export const ZoomedImage = styled.img`
  max-width: 130%; /* Zoom the image */
  max-height: 130%;
  object-fit: contain;
`;
