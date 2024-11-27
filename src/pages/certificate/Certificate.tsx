//React imports
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//Custom hook import
import useFetchCertificateById from "../../lib/hooks/useFetchCertificatesById";

//Styled components import
import {
  CertificateImage,
  CertificateImageWrapper,
  CertificateInfo,
  CloseButton,
  ModalContent,
  ModalOverlay,
  Wrapper,
  ZoomedImage,
} from "./Certificate.style";

/**
 *
 * @returns React functional Component that renders a single Certificate with it's details. And a clickable image that can be zoomed in usig Modal.
 */
const Certificate = () => {
  //Select the id from URL params.
  const { id } = useParams<{ id: string }>();

  //Fetch the date by the custom hook
  const {
    data: certificate,
    isLoading,
    isError,
    error,
  } = useFetchCertificateById(id || "");

  //Handle Mondal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsModalOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      // Cleanup the event listener when modal is closed or component unmounts
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isModalOpen]);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //Secure that ID is avilable.
  if (!id) {
    return <div>Error!</div>;
  }

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error.message}</h2>}
      {certificate && (
        <>
          <Wrapper>
            <CertificateImageWrapper onClick={handleImageClick}>
              {" "}
              <CertificateImage
                $certificateImgUrl={certificate.certificateImg || ""}
              />
            </CertificateImageWrapper>

            <CertificateInfo>
              <p>
                Course name: <span>{certificate.name}</span>
              </p>
              <p>
                Issued by: <span>{certificate.issuedBy}</span>
              </p>
              <p>
                Course finished on: <span>{certificate.dateFinished}</span>
              </p>
              <p>
                Grade: <span>{certificate.grade}</span>
              </p>
            </CertificateInfo>
          </Wrapper>
          {isModalOpen && (
            <ModalOverlay onClick={handleCloseModal}>
              <ModalContent>
                <CloseButton
                  onClick={() => {
                    {
                      handleCloseModal;
                    }
                  }}
                >
                  ✕
                </CloseButton>
                <ZoomedImage
                  src={certificate?.certificateImg}
                  alt="Zoomed certificate"
                  onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
                />
              </ModalContent>
            </ModalOverlay>
          )}
        </>
      )}
    </>
  );
};

export default Certificate;
