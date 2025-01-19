import React from 'react'

export default function PageHero({text}) {
  return (
    <div className="h-screen w-full bg-cover bg-no-repeat">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-screen w-full bg-gradient-to-r from-indigo-800 to-blue-500"></div>
        <div className="container mx-auto">
          <div
            className="flex flex-wrap justify-center items-center mx-0 h-screen"
          >
            <div className="relative flex basis-[83.3333%] max-w-[83.3333%] items-cente justify-center">
              <div className="text text-center">
                <h1 className="text-4xl sm:text-6xl font-poppins font-extrabold text-white mb-32 break-words">
                  {text}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
