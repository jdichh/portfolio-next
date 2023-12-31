import React from "react";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <section className="px-4 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 leading-relaxed text-center text-my-standard my-20 scroll-mt-[2rem] lg:scroll-mt-20">
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-4">
        Hello, I'm Jason, and my aim is to build{" "}
        <span className="font-bold">user-friendly, engaging websites</span> and{" "}
        <span className="font-bold">web applications</span>.
      </p>
      <p>
        I love to run, play my electric guitar, tinker with computers, and
        discover web technologies.
      </p>
    </section>
  );
}
