import React, { useState, useEffect } from "react";
import LogoPill from "../logo/LogoPill";
import classNames from "classnames";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const scrolled = scrollPosition >= 500;
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={classNames(
        "fixed top-0 left-0 right-0 transition-all duration-300 z-[99] ease-linear",
        {
          "opacity-100": scrolled,
          "opacity-0 select-none cursor-none": !scrolled,
        }
      )}
    >
      <div
        className={classNames(
          "flex flex-row flex-nowrap justify-start py-3 px-4 items-center",
          {
            "bg-white shadow-sm dark:shadow-none dark:bg-dark-800": scrolled,
            "bg-transparent": !scrolled,
          }
        )}
      >
        <div className="container  mx-auto p-0 flex flex-nowrap">
          <LogoPill />
          <button
            className="ml-auto text-white lg:hidden"
            onClick={() => setOpen(!open)}
            key={"button_" + open}
          >
            {open ? <ImCross size="20" /> : <HiOutlineMenu size="24" />}
          </button>

          <div
            className={classNames(
              "hidden lg:flex flex-wrap basis-auto flex-grow-1 items-center ml-auto font-poppins transition-all duration-200",
              {
                "dark:text-white text-black": scrolled,
                "text-white": !scrolled,
              }
            )}
          >
            <ul className="flex-row flex pl-0 mb-0 list-none">
              <NavbarItem href="/" text="Home" />
              <NavbarItem href="/#about-section" text="About" />
              <NavbarItem href="/#education-section" text="Education" />
              <NavbarItem href="/#experience-section" text="Experience" />
              <NavbarItem href="/#projects-section" text="Projects" />
              {/* <NavbarItem href="/#awards" text="Awards" /> */}
              {/* <NavbarItem href="/#contact" text="Contact" /> */}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "w-full lg:hidden absolute px-10 pt-2 pb-6 rounded-b-3xl",
          {
            "hidden rounded-2xl": !open,
            "block shadow-xl": open,
          },
          {
            "bg-gray-50 dark:bg-dark-700": scrolled,
            "bg-transparent": !scrolled,
          }
        )}
      >
        <ul className="flex flex-col">
          <NavbarListItem href="/" title="Home" />
          <NavbarListItem href="/about-section" title="About" />
          <NavbarListItem href="/education-section" title="Education" />
        </ul>
      </div>
    </nav>
  );
}

function NavbarItem({ href, text }) {
  return (
    <li className="list-item">
      <Link href={href} legacyBehavior>
        <a
          className={classNames(
            "text-base py-3 px-5 font-medium border-2 hover:dark:border-b-white border-b-transparent hover:border-b-black border-t-transparent border-x-transparent transition-all"
          )}
        >
          <span
            id="nav-bar-item"
            className={classNames(
              "transition-all duration-100 dark:text-white text-black"
            )}
          >
            {text}
          </span>
        </a>
      </Link>
    </li>
  );
}

function NavbarListItem({ href, title }) {
  const router = useRouter();
  return (
    <li>
      <Link
        href={href}
        className={classNames(
          "text-base py-3 px-5 font-medium border-2 dark:border-b-white border-b-black border-t-transparent border-x-transparent transition-all"
        )}
      >
        {title}
      </Link>
    </li>
  );
}
