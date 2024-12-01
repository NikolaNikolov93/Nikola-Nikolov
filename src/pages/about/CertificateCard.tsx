import { useEffect, useRef, useState } from "react";
import { CertificateCardProps } from "../../lib/types/types";
import { Card, StyledImgDiv, StyledLink } from "./CertificateCard.styles";

const CertificateCard: React.FC<CertificateCardProps> = ({ id, name, url }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 50% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return (
    <Card
      ref={cardRef}
      transition={{ duration: 1.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={isVisible ? "in-view" : ""}
    >
      <StyledImgDiv $url={url}>
        <h3>{name}</h3>
        <StyledLink to={`/about/${name}/${id}`}>Click for details</StyledLink>
      </StyledImgDiv>
    </Card>
  );
};
export default CertificateCard;
