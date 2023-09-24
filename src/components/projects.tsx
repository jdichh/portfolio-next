"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import Project from "./project";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      className="px-6 w-full xl:w-10/12 leading-8 scroll-mt-20"
      id="projects"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      >
        <SectionHeading>Personal Projects</SectionHeading>

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </motion.section>
  );
}
