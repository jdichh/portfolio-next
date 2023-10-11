import React from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import Project from "./project";
import Others from "./others";

export default function Projects() {
  return (
    <section
      className="px-4 w-full xl:w-10/12 leading-8 scroll-mt-20"
      id="works"
    >
      <SectionHeading>Works</SectionHeading>

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}

      <Others />
    </section>
  );
}
