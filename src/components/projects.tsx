"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { projects, miniProjects } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projects)[number];

function Project({ name, description, tools, imageUrl }: ProjectProps) {
  return (
    <section>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
      <Image src={imageUrl} alt={name} quality={95}/>
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
