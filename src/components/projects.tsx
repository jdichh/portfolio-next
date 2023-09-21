"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { projects, miniProjects } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projects)[number];

function Project({
  name,
  description,
  tools,
  imageUrl,
  liveLink,
  githubLink,
}: ProjectProps) {
  return (
    <section className="group overflow-hidden bg-[#1F1E26] rounded-sm mb-3 relative hover:bg-[#262630] transition ease-in-out duration-150">
      <div className="flex flex-col py-6 pb-7 px-4 sm:px-8 xl:max-w-[55%] xl:min-h-[20rem]">
        <h3 className="text-xl text-center sm:text-2xl sm:text-left text-[#6E99C4]">{name}</h3>
        <ul className="flex flex-wrap my-2 gap-2 text-sm justify-center sm:justify-start">
          {tools.map((tool, index) => (
            <li
              key={index}
              className="bg-[#E9E9E9] px-2 py-0 uppercase tracking-wider text-[#1F1E26] rounded-sm"
            >
              {tool}
            </li>
          ))}
        </ul>
        <p className="opacity-90 leading-relaxed">{description}</p>
        <ul className="flex flex-wrap gap-2 mt-8 justify-center sm:justify-start">
        <a
            href={liveLink}
            target="_blank"
            aria-label="Live demo of the project."
            className="bg-[#6E99C4] hover:bg-[#E9E9E9] px-6 sm:px-3 text-[#1F1E26] rounded-sm transition ease-in-out duration-150 hover:scale-[1.05]"
          >
            Demo
        </a>
        <a
            href={githubLink}
            target="_blank"
            aria-label="GitHub repository of the project."
            className="bg-[#6E99C4] hover:bg-[#E9E9E9] px-6 sm:px-3 text-[#1F1E26] rounded-sm transition ease-in-out duration-150 hover:scale-[1.05]"
          >
            GitHub
        </a>
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={name}
        quality={95}
        className="hidden xl:block absolute transition ease-in-out duration-150 rounded-sm top-6 md:-right-44 2xl:-right-12 w-[34rem] group-hover:scale-[1.03] group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:-rotate-1"
      />
    </section>
  );
}

export default function Projects() {
  return (
    <motion.section
      className="px-6 lg:w-10/12 xl:w-8/12 lg:px-0 leading-8 mb-24"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
