import Image from "next/image";
import Link from "next/link";
import React from "react";
import H3 from "../headings/H3";
import ImageGIF from "../images/ImageGIF";

export default function ProjectCardTest({ title, images, imageAltText, href }) {
  return (
    <div className="hover:scale-[104%] cursor-pointer text-center transition-all duration-100 rounded-4xl shadow-xl bg-gray-50 dark:bg-dark-800">
      <Link href={href} legacyBehavior>
        <a>
          <div className="p-5 flex flex-col h-full">
            <div className="mb-4">
              <H3>{title}</H3>
            </div>
            <div className="mt-auto">
              <ImageGIF images={images} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
