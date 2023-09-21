"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="w-11/12 lg:w-6/12"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h3 className="text-md lg:text-lg text-center mb-3 mt-12 lg:mt-0">
        About Me
      </h3>
      <p className="mb-3">
        I am a fresh IT graduate of Colegio de San Juan de Letran-Calamba in the
        Philippines, and my goal for now is to be a{" "}
        <span className="text-[#6E99C4]">proficient front-end developer</span>.
        And down the line, branch out more to{" "}
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
