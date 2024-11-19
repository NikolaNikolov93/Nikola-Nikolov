import { CertificateCardProps } from "../../lib/types/types";
import { Card, StyledImgDiv, StyledLink } from "./CertificateCard.styles";

const CertificateCard: React.FC<CertificateCardProps> = ({ id, name, url }) => {
  return (
    <Card
      transition={{ duration: 1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <StyledImgDiv $url={url}>
        <h3>{name}</h3>
        <StyledLink to={`/about/${name}/${id}`}>Click for details</StyledLink>
      </StyledImgDiv>
    </Card>
  );
};
export default CertificateCard;
