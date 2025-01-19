import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ResumeBlock from "../blocks/ResumeBlock";
import ProjectCard, { ProjectDescriptionList } from "../cards/ProjectCard";
import H2 from "../headings/H2";
import { useInView } from "react-intersection-observer";
import { FaUserGraduate, FaRobot } from "react-icons/fa";
import { GiBarbecue, GiHamburger, GiOilDrum, GiOilPump, GiOilRig, GiSecurityGate, GiShield } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";
import { GrShieldSecurity } from "react-icons/gr";

export default function ResumeSection() {
  const options = {
    threshold: 0.3,
  };
  const [
    educationSectionRef,
    educationSectionInViewport,
    educationSectionEntry,
  ] = useInView(options);
  const [
    experienceSectionRef,
    experienceSectionInViewport,
    experienceSectionEntry,
  ] = useInView(options);
  const [projectSectionRef, projectSectionInViewport, projectSectionEntry] =
    useInView(options);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (projectSectionInViewport) {
      setActiveSection("project-section");
    } else if (experienceSectionInViewport) {
      setActiveSection("experience-section");
    } else if (educationSectionInViewport) {
      setActiveSection("education-section");
    }
  }, [
    projectSectionInViewport,
    experienceSectionInViewport,
    educationSectionInViewport,
  ]);

  return (
    <section className="font-poppins" id="resume-section">
      <div className="container mx-auto w-9/12">
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="flex-grow-0 flex-shrink-0 basis-1/4 max-w-[25%] lg:block hidden">
            <nav className="m-0 top-[180px] sticky">
              <ul className="m-0 p-0">
                <StickyListItem
                  text="Education"
                  href="#education-section"
                  active={activeSection === "education-section"}
                />
                <StickyListItem
                  text="Work Experience"
                  href="#experience-section"
                  active={activeSection === "experience-section"}
                />
                <StickyListItem
                  text="Projects"
                  href="#projects-section"
                  active={activeSection === "projects-section"}
                />
              </ul>
            </nav>
          </div>
          <div className="lg:flex-grow-0 lg:flex-shrink-0 lg:basis-3/4 lg:max-w-[75%]">
            <div
              id="education-section"
              className="mb-16"
              ref={educationSectionRef}
            >
              <H2>Education</H2>
              <ResumeBlock
                dates={[["Sep. 2020", "Present"]]}
                heading="B.Eng, Mechanical Engineering - Mechatronics specialization "
                subheading="Toronto Metropolitan University"
                icon={<FaUserGraduate color="white" size={"24px"} />}
              >
                <p className="dark:text-white text-black font-poppins">
                  <span className="font-bold">Courses</span>: 
                  Electric Machines & Actuators, Digital Systems, Electric Circuits, Measurement Instruments & Sensors, Control Systems, Manufacturing System Control, Intelligent Systems, Mechatronics Systems Design, Machine Design, Mechanics of Machines, Solid Mechanics, Statics & Dynamics, Fluid Mechanics, Applied Thermodynamics, Heat Transfer
                </p>
              </ResumeBlock>
            </div>

            <div
              id="experience-section"
              className="mb-16"
              ref={experienceSectionRef}
            >
              <H2>Work Experience</H2>
              {/* <ResumeBlock
                dates={[["Oct. 2020", "Feb. 2021"]]}
                heading="TorontoMet Design League"
                subheading="Space Mining Robot"
                icon={<FaRobot color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>
                    Assembled a robotic arm on SolidWorks that utilises
                    jackhammers to drill through large rocks
                  </li>
                  <li>
                    Produced detailed drawings and assembly diagrams for all
                    parts of project as per requirements
                  </li>
                  <li>
                    Devised a solution to mine rocks on Mars to support
                    Earth&apos;s increasing demand for natural resources
                  </li>
                </ul>
              </ResumeBlock> */}
              <ResumeBlock
                dates={[
                  ["Jan. 2024", "Aug. 2024"],
                ]}
                heading="Suncor Energy Inc., Oakville"
                subheading="Maintenance Engineer"
                icon={<GiOilRig color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins">
                  Contributed to projects optimizing equipment reliability and streamlining maintenance processes by conducting root cause analyses to reduce downtime, implementing a asset database for Vapor Recovery Units to enhance predictive maintenance, and improving inventory management efficiency. I developed Scopes of Work for Pressure Relief Device piping modifications to ensure API compliance and led VRU and PRD initiatives by managing teams, setting deadlines, delegating tasks, and presenting progress and safety updates.                
                </ul>
              </ResumeBlock>
              {/* <ResumeBlock
                dates={[["Jan. 2020", "Sep. 2021"]]}
                heading="Coding Instructor"
                subheading="Lead Instructor"
                icon={<AiFillCode color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>Assisted with catering and inventory management</li>
                  <li>
                    Exhibited strong communication abilities when communicating
                    with customer
                  </li>
                  <li>Handled large-scale orders, such as weddings</li>
                </ul>
              </ResumeBlock> */}
              <ResumeBlock
                dates={[["May 2023", "Dec. 2023"]]}
                heading="Suncor Energy Inc., Oakville"
                subheading="Reliability Engineer"
                icon={<GiOilPump color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins">
                  Focused on advancing projects to enhance system efficiency and ensure regulatory compliance. I corrected P&ID discrepancies, developed corrosion control strategies, and analyzed deadlegs to mitigate risks and improve performance. Additionally, I managed Engineering Change processes for PRD modifications, created a database for streamlined maintenance, and led VRU and PRD initiatives by coordinating teams, planning schedules, and delivering safety presentations.
                </ul>
              </ResumeBlock>
              {/* <ResumeBlock
                dates={[["Oct. 2020", "Feb. 2021"]]}
                heading="TorontoMet Design League"
                subheading="Space Mining Robot"
                icon={<FaRobot color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins ml-4">
                  <li>
                    Assembled a robotic arm on SolidWorks that utilises
                    jackhammers to drill through large rocks
                  </li>
                  <li>
                    Produced detailed drawings and assembly diagrams for all
                    parts of project as per requirements
                  </li>
                  <li>
                    Devised a solution to mine rocks on Mars to support
                    Earth&apos;s increasing demand for natural resources
                  </li>
                </ul>
              </ResumeBlock> */}
              <ResumeBlock
                dates={[["May 2022", "Aug. 2022"]]}
                heading="Cyberwolfe, Oakville"
                subheading="Automation & Controls Engineer"
                icon={<GrShieldSecurity color="white" size={"24px"} />}
              >
                <ul className="list-disc dark:text-white text-black font-poppins">
                  Designed secure automated access systems, creating 3D CAD models, 2D drawings, assemblies, and applying GD&T in SolidWorks for precision. I performed FEA to ensure structural integrity and rendered models to communicate designs effectively. I also programmed PLCs for RFID integration and troubleshooted PLC logic during prototyping to ensure seamless and reliable system operation.                </ul>
              </ResumeBlock>
            </div>

            <div
              id="projects-section"
              className="mb-16"
              ref={projectSectionRef}
            >
              <H2 className="heading">Projects</H2>
              <div className="flex justify-center">
                <div className="grid auto-rows-max grid-cols-1 xl:gap-x-8 gap-x-5 gap-y-8 mt-3 mb-12 w-full">
                <ProjectCard
                    projectName="Coffee Bean Destoner Device"
                    projectSubtitle="PLC-Controlled System with Precision Design"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Developed a cylindrical coffee bean destoner employing sieving, vibration, and airflow technologies for density-based impurity removal.`,
                          `Integrated Allen-Bradley PLC-based control system with HMI for regulating flow, monitoring performance, and ensuring efficiency.`,
                          `Designed vibrating sieves and a cone-shaped dispenser for uniform input and calibrated airflow to enhance separation accuracy.`,
                          `Utilized mathematical modeling, fluid mechanics, vibration analysis, and FEA to optimize system performance.`,
                          `Created prototypes using 3D CAD, GD&T, and 3D printing, refining the modular system for scalability and cost-effectiveness.`,
                          `Added performance tracking and capacity sensors in the waste tray to improve reliability and ease of maintenance.`,
                        ]}
                      />
                    }
                  />

                  <ProjectCard
                    projectName="Electro Mechanical Weight Scale"
                    projectSubtitle="LabVIEW-Based PID-Controlled Device"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Designed and implemented an electro-mechanical weighing system with a load cell, DAQ system, and PID controller.`,
                          'Utilized LabVIEW for signal processing, calibration, noise filtering, and actuator control.',
                          'Conducted static and dynamic calibration to ensure accurate measurements within a 0–1 kg range.',
                          'Integrated a stepper motor for precise dial pointer adjustments using PID logic for stability.',
                          'Demonstrated strong expertise in sensor calibration, feedback control, and mechatronics system design.',
                        ]}
                      />
                    }
                  />

                  <ProjectCard
                    projectName="Autonomous Driving Vehicle"
                    projectSubtitle="Arduino-Based Navigation System in C/C++"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Developed an Arduino-based autonomous driving vehicle with line tracking, obstacle avoidance, and infrared (IR) remote control.`,
                          'Integrated IR sensors and ultrasonic modules for precise navigation and obstacle detection.',
                          'Programmed motor control and movement logic using PWM signals for smooth transitions and accurate steering.',
                          'Utilized servo motors for omnidirectional scanning in obstacle avoidance mode, enhancing operational safety and efficiency.',
                          'Implemented modular and scalable code architecture to enable seamless mode switching.',
                          'Demonstrated strong expertise in embedded systems, sensor integration, and robotics.',
                        ]}
                      />
                    }
                  />
                    
                  <ProjectCard
                    projectName="Windmill Waterpump Gearbox"
                    projectSubtitle="3D CAD, Simulation and FEA Optimization"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Designed a bull and pinion gearbox to transmit 20 Nm torque at 65 rpm for a wind pump.`,
                          `Conducted finite element analysis (FEA) using SolidWorks to evaluate and optimize stress distribution and durability.`,
                          `Modified the design by adding gears and arms, improving stress distribution and achieving infinite life under cyclic loads.`,
                          `Ensured compactness with dimensions of 60 cm x 19 cm x 35.39 cm, meeting the 70 cm x 70 cm x 70 cm criteria.`,
                          `Selected AISI 1020-HR steel for high fatigue strength and performance.`,
                          `Developed detailed 3D CAD models, assemblies, and technical drawings for manufacturing.`,
                          `Validated the design for static yielding and fatigue failure, ensuring long-term reliability.`,
                        ]}
                      />
                    }
                  />
                  <ProjectCard
                    projectName="4-Link Medical Gripper"
                    projectSubtitle="Planar Mechanism Design with CAD and Motion Analysis"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Designed a two-finger robotic gripper capable of securely grasping a 200-gram cup with a 10 cm diameter.`,
                          `Utilized SolidWorks for creating 3D CAD models, assemblies, and engineering drawings.`,
                          `Conducted force analysis to determine appropriate servo motor selection and torque requirements.`,
                          `Implemented MATLAB for motion analysis, generating plots to evaluate gripper path and performance at varying angles.`,
                          `Incorporated a 5-bar planar mechanism, verified for crank-rocker motion and workspace coverage.`,
                          `Selected materials based on static friction tests, optimizing grip stability using an acrylic cup for high friction with rubber.`,
                        ]}
                      />
                    }
                  />
                  
                  <ProjectCard
                    projectName="Social Media Platform"
                    projectSubtitle="Real-Time MERN Stack Application"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Developed a music-centric social media platform using the MERN stack with real-time notifications and chat functionality via Socket.io.`,                          
                          `Implemented features for post creation, image uploads, and secure user authentication (login/logout).`,
                          `Designed and coded both frontend and backend, totaling ~1,500 lines of code.`,
                          `Utilized MongoDB for scalable data management and ensured responsive, user-friendly performance.`,
                        ]}
                      />
                    }
                  />

                    <ProjectCard
                    projectName="Investment Value Analyzer"
                    projectSubtitle="Machine Learning Model in Python"
                    projectText={
                      <ProjectDescriptionList
                        list={[
                          `Developed a data-driven tool to forecast real estate investment values across metropolitan areas.`,
                          'Designed and implemented predictive algorithms using Python libraries like pandas, NumPy, scikit-learn, and matplotlib for data processing, analysis, and visualization.',
                          'Processed and analyzed large CSV datasets for cities including New York, Charlotte, and Los Angeles, integrating market trends and key performance indicators.',
                          'Delivered actionable insights for investors using advanced machine learning models and data analysis techniques.',
                        ]}
                      />
                    }
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyListItem({ text, href, active }) {
  return (
    <li className="list-none mb-[10px]">
      <Link href={href} legacyBehavior>
        <a
          className={classNames(
            "font-bold ml-5 text-lg relative transition-all duration-300",
            {
              "text-indigo-600 after:absolute after:top-1/2 after:-left-6 after:w-5 after:h-[2px] after:bg-indigo-700":
                active,
              "text-black dark:text-white": !active,
            }
          )}
        >
          {text}
        </a>
      </Link>
    </li>
  );
}
