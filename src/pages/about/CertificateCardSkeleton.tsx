// CertificateCardSkeleton.tsx
import { CertificateCardSkeletonDiv } from "./CertificateCardSkeleton.styles";

const CertificateCardSkeleton: React.FC = () => {
  return (
    <CertificateCardSkeletonDiv
      transition={{ duration: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    />
  ); // Use it as a component here
};

export default CertificateCardSkeleton;
