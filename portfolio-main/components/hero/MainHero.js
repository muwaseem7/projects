import React, { useEffect, useState } from "react";
import { TextTyper } from "../../utils/utils";

export default function MainHero() {
  const [text, setText] = useState("");
  const [textTyper, setTextTyper] = useState(null);

  useEffect(() => {
    const wordList = ["Mechanical Engineer.", "Reliability Engineer.", "Automation & Control Engineer."];
    const stopTime = 2000;
    if (textTyper === null) {
      setTextTyper(new TextTyper(wordList, stopTime, setText));
    }
    return () => {
      setTextTyper("");
    };
  }, [textTyper]);

  return (
    <React.Fragment>
      <div className="h-screen w-full bg-cover bg-no-repeat">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-screen w-full"></div>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center mx-0 h-screen">
            <div className="relative flex basis-[83.3333%] max-w-[83.3333%] items-cente justify-center">
              <div className="text text-center mb-32">
                <span className="uppercase text-xl font-poppins font-extrabold text-blue-700 tracking-[6px]">
                  Hey! MY NAME IS
                </span>
                <h1 className="text-6xl font-poppins font-extrabold dark:text-white text-black mt-4 mb-10">
                  Muhammad Waseem
                </h1>
                <h2 className="font-extrabold font-poppins dark:text-white text-black text-3xl">
                  I&apos;m a&nbsp;
                  <span className="text-blue-700 underline">
                    <span>{text}</span>
                  </span>
                </h2>
                <h2 style={{ display: "none" }}>
                  Mechanical Engineer
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
