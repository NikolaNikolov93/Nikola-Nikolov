//Import Information from the constnats
import { useRef } from "react";
import { myInfo } from "../../lib/constants/constants";

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
  Footer,
} from "./About.styles";

//Components import
import CertificateCard from "./CertificateCard";
import CertificateCardSkeleton from "./CertificateCardSkeleton";
import ArrowButton from "../../components/arrow/ArrowButton";

/**
 *
 * @returns React functional component that that renders the About page.
 */
const About: React.FC = () => {
  //Reference for the bottom element
  const bottomRef = useRef<HTMLDivElement>(null);

  //Reference fro the top element
  const topRef = useRef<HTMLDivElement>(null);

  //Fetch data using the custom hook with React Query implementation.
  const { isPending, error, data } = useFetchCertificates();

  //Scroll to bottom handler

  //Scroll to top handler
  const scrollToTop = () => {
    if ("scrollBehavior" in document.documentElement.style) {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  };
  return (
    <Wrapper ref={topRef}>
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

      <Footer ref={bottomRef}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae
          ducimus, ullam animi voluptate eius adipisci quis. Neque, suscipit
          aperiam ducimus, similique eligendi explicabo velit provident rem
          atque voluptate distinctio.
        </p>{" "}
        <ArrowButton isUp={true} scrollToSection={scrollToTop} />
      </Footer>
    </Wrapper>
  );
};

export default About;
