//Import Information from the constnats
import { myInfo } from "../../lib/constants/constants";

//Custom hook import
import useFetchCertificates from "../../lib/hooks/useFetchCertificates";
import useFetchUser from "../../lib/hooks/useFetchUser";

//Styled components import
import {
  AboutWrapper,
  CertifcatesWrapper,
  Wrapper,
  ListItem,
  ListP,
  ListImg,
  Footer,
  FooterStyledA,
} from "./About.styles";

//Components import
import CertificateCard from "./CertificateCard";
import CertificateCardSkeleton from "./CertificateCardSkeleton";

/**
 *
 * @returns React functional component that that renders the About page.
 */
const About = () => {
  //Fetch data using the custom hook with React Query implementation.
  const { isLoading, isPending, error, data } = useFetchCertificates();
  const {
    data: userData,
    isPending: isUserDataPending,
    error: isUserDataError,
    isLoading: isUserDataLoading,
  } = useFetchUser();

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
                alt={infoItem.img}
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
      {isLoading && <h2>Loading certificates...</h2>}
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

      <Footer>
        {userData?.map((user, index) => (
          <ListItem key={index}>
            <ListP>
              {`Hello, I'm ${user.firstName} ${user.lastName}, a passionate ${
                user.age
              }-year-old aspiring professional from ${user.city}, ${
                user.country
              }. Born in ${user.birthYear}${
                user.birthDate
                  ? ` (on ${user.birthDate.toDate().toLocaleDateString()})`
                  : ""
              }, I'm eager to bring fresh ideas and enthusiasm to the field. Let's connect and create something remarkable!`}
            </ListP>
            <ListImg src="/profile-pic.png" alt="profile-pic"></ListImg>
          </ListItem>
        ))}
        <FooterStyledA
          href="/Nikola Nikolov CV.pdf"
          download="Nikola-Nikolov-CV.pdf"
          animate={{
            rotate: [0, -3, 3, -3, 0], // Slight rotation with the shake
          }}
          transition={{
            duration: 0.8, // Duration of the shake
            ease: "easeInOut", // Smooth easing
            repeat: Infinity, // Repeat forever
            repeatDelay: 1, // Delay before repeating
          }}
        >
          Download CV
        </FooterStyledA>
      </Footer>
    </Wrapper>
  );
};

export default About;
