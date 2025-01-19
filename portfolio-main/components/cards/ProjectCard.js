import React from "react";
import MainCarousel from "../carousel/MainCarousel";
import { Fade } from "react-reveal";

export function ProjectDescriptionList({ list }) {
  return (
    <ul className="font-poppins text-xl list-disc pl-10 leading-relaxed">
      {list.map((item, index) => {
        return (
          <li className="list-item mb-3" key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default function ProjectCard({
  projectName,
  projectSubtitle,
  projectText,
  images,
  alts,
}) {
  return (
    <Fade bottom cascade duration={1000}>
      <div className="py-0">
        <div className="flex flex-col lg:flex-row mx-0 flex-wrap justify-center items-center w-full bg-gray-50 dark:bg-dark-800 text-black dark:text-white rounded-4xl p-5">
          <div className="w-full lg:w-[100%] lg:max-w-[100%] lg:basis-[100%]">
            <div className="flex flex-col items-stretch justify-start">
              <div className="flex flex-col p-2 shadow-2xl w-full h-full rounded-4xl">
                <h2 className="font-poppins font-bold text-5xl text-center break-words">
                  {projectName}
                </h2>
                {projectSubtitle && (
                  <h3 className="font-poppins font-thin text-2xl text-center">
                    {projectSubtitle}
                  </h3>
                )}
                <div className="mt-6">{projectText}</div>
                {images && (
                  <div className="flex flex-row justify-center px-8 mb-5 dark:text-white text-black relative">
                    <MainCarousel images={images} alts={alts} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
