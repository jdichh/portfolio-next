"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import Project from "./project";
import { motion } from "framer-motion";
import Others from "./others";

export default function Projects() {
  return (
    <motion.section
      className="px-4 w-full xl:w-10/12 leading-8 scroll-mt-20 mb-16"
      id="works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeading>Works</SectionHeading>

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}

      <Others />
    </motion.section>
  );
}
