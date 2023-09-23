"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="px-6 w-full lg:w-8/12 xl:w-6/12 leading-relaxed text-left my-20 scroll-mt-[2rem] lg:scroll-mt-20"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-6">
        I am a fresh IT graduate of Colegio de San Juan de Letran-Calamba in the
        Philippines, and my goal for now is to be a{" "}
        <span className="text-[#6E99C4]">proficient front-end developer</span>.
        And down the line, I'll branch out more to{" "}
        <span className="text-[#6E99C4]">back-end development</span> to be a
        well-rounded,
        <span className="text-[#6E99C4]"> full-stack developer</span>.
      </p>
      <p className="mb-6">
        When I'm not creating projects, I enjoy running, playing my beloved
        electric guitar, or just discovering more web technologies as well as
        good development practices, and try to apply them to my projects.
      </p>
      {/* I'll use GitHub API soon. */}
      <p className="mb-6">
        Currently, I'm trying to learn the basics of automated testing with{" "}
        <span className="text-[#6E99C4]">Jest</span> and{" "}
        <span className="text-[#6E99C4]">React-Testing-Library</span> on my
        portfolio, which you can see in this{" "}
        <a
          href="https://github.com/jdichh/portfolio-next-TESTING/tree/main/__test__"
          target="_blank"
          aria-label="Button to the GitHub repo where I'm trying to practice automated testing with jest and react-testing library"
        >
          <span className="text-[#6E99C4] underline underline-offset-4 hover:text-[#DADADA] transition ease-in-out duration-100">
            GitHub repo
          </span>
        </a>
        .
      </p>
      <p className="mb-6">
        I'm a big fan of question-driven development, by the way.
      </p>
    </motion.section>
  );
}