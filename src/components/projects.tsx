"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import Project from "./project";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      className="px-4 w-full xl:w-10/12 leading-8 scroll-mt-20"
      id="works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.175, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeading>Works</SectionHeading>

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}

      <div className="flex justify-center">
        <p className="text-my-standard">
          View more of my projects in my{" "}
          <a
            href="https://www.github.com/jdichh"
            target="_blank"
            aria-label="Button for the GitHub repo of the project."
            className="font-semibold text-[#236660]"
          >
            GitHub profile.
          </a>
        </p>
      </div>
    </motion.section>
  );
}
