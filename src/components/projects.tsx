import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { projects, miniProjects } from "@/lib/data";

export default function Projects() {
  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 mb-24">
        {projects.map((project) => (
          <li key={project.id} className="flex text-[#E9E9E9] text-center">
            {project.name}
          </li>
        ))}
      </div>

      <SectionHeading>Mini Projects</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 mb-24">
        {miniProjects.map((miniProject) => (
          <li key={miniProject.id} className="flex text-[#E9E9E9] text-center">
            {miniProject.name}
          </li>
        ))}
      </div>
    </section>
  );
}
