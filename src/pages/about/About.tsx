//Import Information from the constnats
import { myInfo } from "../../lib/constants";

//Custom hook import
import useFetchCertificates from "../../lib/hooks/useFetchCertificates";

//Styled components import
import {
  AboutWrapper,
  CertifcatesWrapper,
  Wrapper,
  ListItem,
  ListP,
  ListImg,
} from "./About.styles";

//Components import
import CertificateCard from "./CertificateCard";
import CertificateCardSkeleton from "./CertificateCardSkeleton";

/**
 *
 * @returns React functional component that that renders the About page.
 */
const About: React.FC = () => {
  //Fetch data using the custom hook with React Query implementation.
  const { isPending, error, data } = useFetchCertificates();

  return (
    <Wrapper>
      <AboutWrapper>
        <ul>
          {myInfo.map((infoItem, index) => (
            <ListItem key={index}>
              <ListP
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                initial={
                  index % 2 == 0
                    ? { x: -50, opacity: 0 }
                    : { x: 50, opacity: 0 }
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
                    ? { x: 50, opacity: 0 }
                    : { x: -50, opacity: 0 }
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
