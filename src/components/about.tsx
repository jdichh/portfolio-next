"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";

export default function About() {
  return (
    <motion.section
      className="px-4 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 leading-relaxed text-center my-20 scroll-mt-[2rem] lg:scroll-mt-20"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-6">
        I aim to build{" "}
        <span className="font-bold text-[#285955]">
          user-friendly and impressive-looking websites
        </span>{" "}
        here in the Philippines.
      </p>
      <p className="mb-6">
        I'm also a{" "}
        <span className="font-bold text-[#285955]">recent IT graduate</span>{" "}
        of Colegio de San Juan De Letran-Calamba, and{" "}
        <span className="font-bold text-[#285955]">
          {" "}
          looking to get my foot in the door in the tech industry
        </span>
        .
      </p>
      <p className="mb-6">
        Formalities aside, I love running, playing my electric guitar, tinkering
        with computers, and discovering web technologies, especially frontend
        tech.
      </p>
    </motion.section>
  );
}
