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
        I am a fresh IT graduate based in the Philippines, looking to become a{" "}
        <span className="text-[#6E99C4] font-medium">
          frontend web developer
        </span>
        . Since I started my self-learning journey, I've discovered that I
        really <span className="text-[#6E99C4] font-medium">love learning</span>{" "}
        various web technologies, especially front-end tech. And when I get to
        scratch the surface of what a piece of software can be capable of, I get{" "}
        <span className="text-[#6E99C4] font-medium">excited</span> to see what
        else it can do.
      </p>
      <p className="mb-6">
        One of my many goals is to help individuals and/or businesses present
        themselves in the digital world by creating{" "}
        <span className="text-[#6E99C4] font-medium">
          good-looking and user friendly websites
        </span>
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
