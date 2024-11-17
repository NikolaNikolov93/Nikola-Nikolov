import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchCertificateById from "../../lib/hooks/useFetchCertificatesById";
import {
  CertificateImage,
  CertificateInfo,
  Wrapper,
} from "./Certificate.style";

const Certificate = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>Error!</div>;
  }
  const certificate = useFetchCertificateById(id);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setMousePosition({ x: xPercent, y: yPercent });
  };

  return (
    <Wrapper>
      <CertificateImage
        $certificateImgUrl={certificate?.certificateImg || ""}
        $x={mousePosition.x}
        $y={mousePosition.y}
        onMouseMove={handleMouseMove}
      />

      <CertificateInfo>
        <p>
          Course name: <span>{certificate?.name}</span>
        </p>
        <p>
          Issued by: <span>{certificate?.issuedBy}</span>
        </p>
        <p>
          Course finished on: <span>{certificate?.dateFinished}</span>
        </p>
        <p>
          Grade: <span>{certificate?.grade}</span>
        </p>
      </CertificateInfo>
    </Wrapper>
  );
};

export default Certificate;
