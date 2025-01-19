import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/section/AboutSection";
import ResumeSection from "../components/section/ResumeSection";
import SpaceFiller from "../components/space-fillers/SpaceFiller";
import Head from "next/head";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Muhammad Waseem | Mechanical Engineer</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="title"
          content="Muhammad Waseem - Mechanical Engineer"
        />
        <meta
          name="description"
          content="I am a Mechanical Engineering Student at Toronto Metropolitan University who has worked on several groundbreaking projects. With my knowledge in Java, Python, SolidWorks, and many more programs and languages, I continue to develop amazing projects that aim to change the world."
        />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="Muhammad, Waseem, Muhammad, Waseem, Mechanical, Engineer, Mechanical Engineer, Developer, Mechatronics, Ryerson University, Ryerson, TMU, Toronto Metropolitan, SolidWorks, AutoCAD, Java, Python, C, JavaScript, Autonomous Driving Vehicle, Arduino, Raspberry Pi, DeltaHacks, GD&T, Finite Element Analysis, 3D CAD, 2D CAD"
        />

        <meta
          property="og:title"
          content="Muhammad Waseem - Mechanical Engineer"
        />
        <meta property="og:link" content="https://muhwaseem.com/" />
        <meta
          property="og:description"
          content="I am a Mechanical Engineering Student at Toronto Metropolitan University who has worked on several groundbreaking projects. With my knowledge in Java, Python, SolidWorks, and many more programs and languages, I continue to develop amazing projects that aim to change the world."
        />
        <meta
          property="og:image"
          content="https://www.muhwaseem.com/images/visionx/visionx-1.jpg"
        />

        <link rel="amphtml" href="https://www.muhwaseem.com/index_amp" />
        <link rel="canonical" href="https://muhwaseem.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="h-screen text-black bg-black flex items-center overflow-hidden select-none">
        <div className="relative bottom-16 xl:bottom-24 w-full">
          <Fade bottom delay={1000}>
            <div className="leading-[10vw] block absolute w-full text-[13vw] -mr-[0.1em] tracking-[0.1em] text-center text-indigo-500 fade font-extrabold">
              MUHAMMAD
            </div>
          </Fade>
          <div className="absolute fade-image -bottom-[37vw] left-[35%] z-50">
            <Fade>
              <img
                src=""
                className="w-[30vw]"
                alt="Muhammad Waseem"
              />
            </Fade>
          </div>
        </div>
      </div>
      <div className="dark:bg-black">
        <SpaceFiller />
        <AboutSection />
        <SpaceFiller />
        <ResumeSection />
        <SpaceFiller />
      </div>
    </div>
  );
}
