"use client";

import { projects } from "@/lib/data";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectProps = (typeof projects)[number];

export default function Project({
  name,
  description,
  tools,
  imageUrl,
  liveLink,
  githubLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      className="mb-6 last:mb-0"
      ref={ref}
      style={{
        scale: scale,
        opacity: opacity,
      }}
    >
      <section className="group overflow-hidden bg-[#1D1C23] rounded-sm relative hover:bg-[#23222B] transition ease-in-out duration-150 outline outline-1 outline-[#6E99C4]">
        <div className="flex flex-col py-6 pb-7 px-4 sm:px-8 md:max-w-[50%] xl:max-w-[55%] md:min-h-[16rem]">
          <h3 className="text-xl text-center sm:text-2xl sm:text-left text-[#E9E9E9] font-bold">
            {name}
          </h3>
          <ul className="flex flex-wrap my-2 gap-2 text-sm justify-center sm:justify-start font-semibold">
            {tools.map((tool, index) => (
              <li
                key={index}
                className="bg-[#6E99C4] px-2 py-0 uppercase tracking-wider text-[#1F1E26] rounded-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
          <p className="opacity-90 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mt-8 justify-center sm:justify-start font-medium">
            <a
              href={githubLink.toString()}
              target="_blank"
              aria-label="GitHub repository of the project."
              className="bg-[#E9E9E9] hover:bg-[#6E99C4] px-6 sm:px-3 text-[#1F1E26] rounded-sm transition ease-in-out duration-150 hover:scale-[1.05]"
            >
              GitHub
            </a>
            <a
              href={liveLink.toString()}
              target="_blank"
              aria-label="Live demo of the project."
              className="bg-[#E9E9E9] hover:bg-[#6E99C4] px-6 sm:px-3 text-[#1F1E26] rounded-sm transition ease-in-out duration-150 hover:scale-[1.05]"
            >
              Demo
            </a>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt={name}
          quality={95}
          className="hidden md:block absolute transition ease-in-out duration-150 rounded-sm top-6 md:-right-44 2xl:-right-20 w-[34rem] group-hover:scale-[1.03] group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:-rotate-1"
        />
      </section>
    </motion.div>
  );
}
