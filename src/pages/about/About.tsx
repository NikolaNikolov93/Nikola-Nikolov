import useFetchCertificates from "../../lib/hooks/useFetchCertificates";
import { Wrapper } from "./About.styles";
import CertificateCard from "./CertificateCard";

const About: React.FC = () => {
  const courses = useFetchCertificates();

  return (
    <Wrapper>
      {courses.map((course) => (
        <CertificateCard
          key={course.id}
          id={course.id}
          name={course.name}
          url={course.certificateImg}
        />
      ))}
    </Wrapper>
  );
};

export default About;
