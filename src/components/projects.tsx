import React from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section
      className="px-6 w-full lg:w-10/12 xl:w-9/12 leading-8 scroll-mt-[2rem] md:scroll-mt-7 lg:scroll-mt-18 xl:scroll-mt-20"
      id="projects"
    >
      <SectionHeading>Personal Projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
