"use client"

import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";
import Project from "./Project";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      className="px-3 w-full xl:w-10/12 leading-8 scroll-mt-20"
      id="works"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading>Works</SectionHeading>

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </motion.section>
  );
}
