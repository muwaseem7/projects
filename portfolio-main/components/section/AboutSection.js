import Link from "next/link";
import React from "react";
import ProjectDescriber from "./ProjectDescriber";
import Image from "next/image";
import Fade from "react-reveal/Fade";

export default function AboutSection() {
  return (
    <div id="about-section">
      <Fade bottom>
        <ProjectDescriber
          leftDisplay={
            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                src="/muhammad-visionx.png"
                alt="About Photo"
                width={400}
                height={400}
                className="rounded-3xl"
              />
            </div>
          }
          rightDisplay={
            <div className="xl:pl-20 lg:pl-10 font-poppins">
              <h2 className="mb-6 font-poppins font-bold text-5xl">About Me</h2>
              <p className="text-xl leading-relaxed">
              I’m a Mechanical Engineer driven by the challenge of making systems more reliable and efficient. I’m passionate about ensuring operations run smoothly by improving processes, minimizing downtime, and enabling quick, informed responses when issues arise.<br></br><br></br>
              My experiences have helped me build strong skills in communication, leadership, and organization, gained through managing projects, collaborating with cross-functional teams, and delivering results in fast-paced environments.<br></br><br></br>
              I’ve worked on projects that optimize maintenance strategies, enhance system performance, and ensure compliance with industry standards. I’ve also contributed to automation and control initiatives, assisting with PLC programming, system design, and testing. I’m motivated by solving complex challenges and creating impactful solutions that improve how systems operate.<br></br><br></br>
              </p>

              <Fade bottom delay={50}>
                <div className="text-white w-max text-center border-indigo-600 border-4 hover:border-white text-base tracking-wide px-4 py-3 mt-5 font-sembold hover:scale-[102%] active:scale-[98%] rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-500 transition-all duration-150 hover:shadow-2xl">
                  <Link href="Muhammad-CV.pdf" passHref legacyBehavior>
                    <a target="_blank" rel="noreferrer" download>
                      Download Resume
                    </a>
                  </Link>
                </div>
              </Fade>
            </div>
          }
        />
      </Fade>
    </div>
  );
}
