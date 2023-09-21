"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="w-11/12 xl:w-5/12 leading-8 xl:text-center mb-24"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a fresh IT graduate of Colegio de San Juan de Letran-Calamba in the
        Philippines, and my goal for now is to be a{" "}
        <span className="text-[#6E99C4]">proficient front-end developer</span>.
        And down the line, I'll branch out more to{" "}
        <span className="text-[#6E99C4]">back-end development</span> to be a
        well-rounded,
        <span className="text-[#6E99C4]"> full-stack developer</span>.
      </p>
      <p className="mb-3">
        When I'm not creating projects, I enjoy running, playing my beloved
        electric guitar, or just discover more web technologies and good
        development practices to apply them to my future projects.
      </p>
    </motion.section>
  );
}
