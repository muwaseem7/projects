import React from "react";
import ContactCard from "../cards/ContactCard";
import H2 from "../headings/H2";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";

export default function ContactSection() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-center mb-5 pb-3">
          <H2>Contact Me @</H2>
        </div>
        <div className="flex justify-center">
          <div className="grid auto-rows-max lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-x-8 gap-x-5 gap-y-8">
            <ContactCard
              title="LinkedIn"
              subtitle="/mwaseem7"
              href="https://www.linkedin.com/in/mwaseem7/"
              icon={<FaLinkedinIn color="white" size="40px" />}
            />
            <ContactCard
              title="GitHub"
              subtitle="/muwaseem7"
              href="https://github.com/muwaseem7"
              icon={<FaGithub color="white" size="46px" />}
            />
            <ContactCard
              title="Contact Number"
              subtitle="416-475-6418"
              href="tel://14164756417"
              icon={<MdPhone color="white" size="40px" />}
            />
            <ContactCard
              title="Email Address"
              subtitle="u.waseem240@gmail.com"
              href="mailto:u.waseem240@gmail.com"
              icon={<HiMail color="white" size="46px" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
