import { infoPair } from "../types/types";

/**
 * A constant that holds a paragraph as React.Node and image path. Together they create the About page Info section
 *
 */
export const myInfo: infoPair[] = [
  {
    text: (
      <>
        Hi, I'm Nikola Nikolov, a passionate <span>programmer</span> from
        Bulgaria. I'm currently studying and building my skills in
        <span> software development</span>, driven by a love for problem-solving
        and creating impactful solutions.
      </>
    ),
    img: "/animated-profile.png",
  },
  {
    text: (
      <>
        While I haven't had formal work experience yet,
        <span> I'm eager to kick-start my career</span> and contribute to
        exciting projects where I can grow and make a <span> difference</span>.
        I'm constantly learning and challenging myself to improve, whether it's
        through
        <span>
          coding projects, personal study, or exploring new technologies
        </span>
        .
      </>
    ),
    img: "/launch2.png",
  },
  {
    text: (
      <>
        Outside of programming, I enjoy staying <span>active</span> by hiking in
        the mountains, playing football, and diving into immersive video games.
        These hobbies help me stay <span>creative, focused, and motivated</span>{" "}
        both in my personal and professional life.
      </>
    ),
    img: "/hiking2.png",
  },
  {
    text: (
      <>
        I'm <span>excited</span> to take the next step in my journey and look
        forward to any opportunities where I can{" "}
        <span>learn, collaborate, and grow.</span>
      </>
    ),

    img: "/journey.png",
  },
];
