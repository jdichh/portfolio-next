"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { projects, miniProjects } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projects)[number];

function Project({ name, description, tools, imageUrl }: ProjectProps) {
  return (
    <section className="overflow-hidden bg-[#1F1E26] rounded-md p-4 mb-3">
      <h3 className="text-2xl text-[#6E99C4]">{name}</h3>
      <p className="opacity-80 leading-relaxed">{description}</p>
      <ul className="flex flex-wrap my-3 gap-2">
        {tools.map((tool, index) => (
          <li key={index} className="bg-[#6E99C4] px-3 py-0 uppercase tracking-wider text-[#1F1E26] rounded-md">{tool}</li>
        ))}
      </ul>
      <Image src={imageUrl} alt={name} quality={95} className="rounded-md"/>
    </section>
  );

}

export default function Projects() {
  return (
    <motion.section
      className="w-11/12 xl:w-5/12 leading-8 mb-24"
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
