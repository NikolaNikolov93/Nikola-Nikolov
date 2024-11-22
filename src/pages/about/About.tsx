import { myInfo } from "../../lib/constants";
import useFetchCertificates from "../../lib/hooks/useFetchCertificates";
import {
  AboutWrapper,
  CertifcatesWrapper,
  Wrapper,
  ListItem,
  ListP,
  ListImg,
} from "./About.styles";
import CertificateCard from "./CertificateCard";
import CertificateCardSkeleton from "./CertificateCardSkeleton";

const About: React.FC = () => {
  const { isPending, error, data, isFetching } = useFetchCertificates();
  let aboutInfo = myInfo;

  return (
    <Wrapper>
      <AboutWrapper>
        <ul>
          {aboutInfo.map((infoItem, index) => (
            <ListItem>
              <ListP
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                initial={
                  index % 2 == 0
                    ? { x: -200, opacity: 0 }
                    : { x: 200, opacity: 0 }
                }
              >
                {infoItem.text}
              </ListP>
              <ListImg
                src={infoItem.img}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                initial={
                  index % 2 == 0
                    ? { x: 200, opacity: 0 }
                    : { x: -200, opacity: 0 }
                }
              ></ListImg>
            </ListItem>
          ))}
        </ul>
      </AboutWrapper>
      {isPending && <h2>Loading certificates...</h2>}
      <CertifcatesWrapper>
        {isPending && (
          <>
            <CertificateCardSkeleton />
            <CertificateCardSkeleton />
            <CertificateCardSkeleton />
          </>
        )}
        {error && <p>Error</p>}
        {data?.map((course) => (
          <CertificateCard
            key={course.id}
            id={course.id}
            name={course.name}
            url={course.certificateImg}
          />
        ))}
      </CertifcatesWrapper>
    </Wrapper>
  );
};

export default About;
