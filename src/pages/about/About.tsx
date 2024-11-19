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

const About: React.FC = () => {
  const courses = useFetchCertificates();

  return (
    <Wrapper>
      <AboutWrapper>
        <ul>
          <ListItem>
            <ListP
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ x: -200, opacity: 0 }}
            >
              Hi, I'm Nikola Nikolov, a passionate <span>programmer</span> from
              Bulgaria. I'm currently studying and building my skills in
              <span> software development</span>, driven by a love for
              problem-solving and creating impactful solutions.
            </ListP>
            <ListImg
              src="/pc-setup.jpg"
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ x: 200, opacity: 0 }}
            ></ListImg>
          </ListItem>
          <ListItem>
            <ListP
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ x: 200, opacity: 0 }}
            >
              While I haven't had formal work experience yet,
              <span> I'm eager to kick-start my career</span> and contribute to
              exciting projects where I can grow and make a
              <span> difference</span>. I'm constantly learning and challenging
              myself to improve, whether it's through
              <span>
                coding projects, personal study, or exploring new technologies
              </span>
              .
            </ListP>
            <ListImg
              src="/journey.jpg"
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ x: -200, opacity: 0 }}
            ></ListImg>
          </ListItem>
          <ListItem>
            <ListP
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ x: -200, opacity: 0 }}
            >
              Outside of programming, I enjoy staying <span>active</span> by
              hiking in the mountains, playing football, and diving into
              immersive video games. These hobbies help me stay{" "}
              <span>creative, focused, and motivated</span> both in my personal
              and professional life.
            </ListP>
            <ListImg
              src="/hiking.jpg"
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ x: 200, opacity: 0 }}
            ></ListImg>
          </ListItem>
          <ListItem>
            <ListP
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ x: 200, opacity: 0 }}
            >
              I'm <span>excited</span> to take the next step in my journey and
              look forward to any opportunities where I can{" "}
              <span>learn, collaborate, and grow.</span>
            </ListP>
            <ListImg
              src="/launch.jpg"
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ x: -200, opacity: 0 }}
            ></ListImg>
          </ListItem>
        </ul>
      </AboutWrapper>
      <CertifcatesWrapper>
        {courses.map((course) => (
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
