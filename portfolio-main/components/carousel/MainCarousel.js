import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function MainCarousel({ images, alts }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextIndex = () => setActiveIndex((activeIndex + 1) % images.length);
  const previousIndex = () =>
    setActiveIndex(
      activeIndex - 1 < 0
        ? images.length - 1
        : (activeIndex - 1) % images.length
    );
  return (
    <div id="controls-carousel" className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[33rem]">
        <div className="duration-700 ease-in-out">
          <div className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-full">
            <img src={images[activeIndex]} alt={alts[activeIndex]} />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={previousIndex}
      >
        <span className="hover:scale-[104%] active:scale-[97%] inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-white/95 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <GrPrevious className="w-5 h-5 text-white dark:text-gray-800" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextIndex}
      >
        <span className="hover:scale-[104%] active:scale-[97%] inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-white/95 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <GrNext className="w-5 h-5 text-white dark:text-gray-800" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
