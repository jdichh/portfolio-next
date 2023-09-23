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
        Philippines, but I started my self-learning journey back in June 2023.
        Since then, I've discovered that I really{" "}
        <span className="text-[#6E99C4] font-medium">love learning</span>{" "}
        various web technologies, especially front-end tech. And when I get to scratch the surface of what
        a piece of software can be capable of, I get all{" "}
        <span className="text-[#6E99C4] font-medium">giddy and excited</span>.
      </p>
      <p className="mb-6">
        When I'm not creating projects, I enjoy running, playing my beloved
        electric guitar, tinkering with computers, or just discovering more web technologies as well as
        good development practices, and try to apply them to my projects.
      </p>
      {/* I'll use GitHub API soon. */}
      <p className="mb-6">
        Currently, I'm trying to learn the basics of automated testing with{" "}
        <span className="text-[#6E99C4] font-medium">Jest</span> and{" "}
        <span className="text-[#6E99C4] font-medium">React-Testing-Library</span> on my
        portfolio, which you can see in this{" "}
        <a
          href="https://github.com/jdichh/portfolio-next-TESTING/tree/main/__test__"
          target="_blank"
          aria-label="Button to the GitHub repo where I'm trying to practice automated testing with jest and react-testing library"
        >
          <span className="text-[#6E99C4] font-medium underline underline-offset-4 hover:text-[#DADADA] transition ease-in-out duration-100">
            GitHub repo
          </span>
        </a>
        .
      </p>
      <p className="mb-6">
        I'm a big fan of{" "}
        <span className="text-[#6E99C4] font-medium">
          question-driven development
        </span>
        , by the way.
      </p>
    </motion.section>
  );
}
