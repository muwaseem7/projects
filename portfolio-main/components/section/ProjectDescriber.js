import React from 'react'

export default function ProjectDescriber({leftDisplay, rightDisplay}) {
  return (
    <section className="py-0">
    <div className="container mx-auto w-11/12 lg:w-9/12">
      <div className="flex flex-col lg:flex-row mx-0 flex-wrap justify-center items-center w-full bg-gray-50 dark:bg-dark-800 rounded-4xl p-5">
        <div className="w-full lg:w-[40%] lg:max-w-[40%] lg:basis-[40%]">
          <div className="flex items-stretch justify-center">
            <div
              className="flex p-2 shadow-2xl w-full h-full rounded-4xl"
            >
              <span className="w-full h-full">
                {leftDisplay}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%] mt-5">
          <div className="flex flex-row justify-start px-8 dark:text-white text-black">
            {rightDisplay}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
