import Link from "next/link";
import React from "react";
import H3 from "../headings/H3";

export default function ContactCard({ title, subtitle, icon, href }) {
  return (
    <div className="hover:scale-[104%] cursor-pointer text-center transition-all duration-100 rounded-4xl shadow-xl bg-gray-50 dark:bg-dark-800 max-w-xs md:max-w-none">
      <Link href={href} passHref legacyBehavior>
        <a target="_blank" rel="noreferrer">
          <div className="px-5 py-8 flex flex-col h-full gap-y-5">
            <div className="flex items-center justify-center">
              <div className="flex w-32 h-32 bg-indigo-600 rounded-full items-center justify-center">
                {icon}
              </div>
            </div>
            <div>
              <H3>{title}</H3>
            </div>
            <div className="mt-auto">
              <p className="text-blue-600 text-lg font-semibold font-poppins break-words">
                {subtitle}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
