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
  videoLink,
  devFootage,
  oldVersion,
  nexusModsLink
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
      <article className="group overflow-hidden bg-[#1F1E26] hover:bg-[#25242D] rounded-sm relative transition ease-in-out duration-100">
        <div className="flex flex-col py-6 px-4 sm:pl-6 md:max-w-[50%] xl:max-w-[55%] md:min-h-[23rem] lg:min-h-[18rem]">
          <h3 className="text-xl text-center sm:text-2xl sm:text-left text-[#DADADA] font-bold">
            {name}
          </h3>
          <ul className="flex flex-wrap my-2 gap-2 text-sm justify-center sm:justify-start font-semibold">
            {tools.map((tool, index) => (
              <li
                key={index}
                className="bg-[#6E99C4] hover:bg-[#DADADA] hover:scale-[1.03] transition ease-in-out duration-100 px-2 py-0 uppercase tracking-wider text-[#1F1E26] rounded-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
          <p className="opacity-90 leading-relaxed">{description}</p>
          <div className="flex flex-col text-center gap-2 mt-8 md:mt-4 font-medium lg:flex-row lg:flex-wrap">
            {liveLink && (
              <a
                href={liveLink.toString()}
                target="_blank"
                aria-label="Live demo of the project."
                className="bg-[#DADADA] hover:bg-[#6E99C4] px-6 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-100 hover:scale-[1.03]"
              >
                Demo
              </a>
            )}
            {videoLink && (
              <a
                href={videoLink.toString()}
                target="_blank"
                aria-label="Video demonstration of the project."
                className="bg-[#DADADA] hover:bg-[#6E99C4] px-6 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-100 hover:scale-[1.03]"
              >
                Video
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink.toString()}
                target="_blank"
                aria-label="GitHub repository of the project."
                className="bg-[#DADADA] hover:bg-[#6E99C4] px-6 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-100 hover:scale-[1.03]"
              >
                GitHub
              </a>
            )}
            {devFootage && (
              <a
                href={devFootage.toString()}
                target="_blank"
                aria-label="Development footage of the project."
                className="bg-[#DADADA] hover:bg-[#6E99C4] px-6 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-100 hover:scale-[1.03]"
              >
                Development Footage
              </a>
            )}
            {oldVersion && (
              <a
                href={oldVersion.toString()}
                target="_blank"
                aria-label="The old version of the project."
                className="bg-[#DADADA] hover:bg-[#6E99C4] px- py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-100 hover:scale-[1.03] sm"
              >
                Old Version
              </a>
            )}
            {nexusModsLink && (
              <a
                href={nexusModsLink.toString()}
                target="_blank"
                aria-label="The NexusMods page of the project."
                className="bg-[#DADADA] hover:bg-[#6E99C4] px- py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-100 hover:scale-[1.03] sm"
              >
                NexusMods
              </a>
            )}
          </div>
        </div>
        <Image
          src={imageUrl}
          alt={name}
          quality={95}
          className="hidden md:block absolute transition ease-in-out duration-100 rounded-sm top-7 md:-right-52 lg:-right-16 xl:-right-20 2xl:-right-1 w-[34rem] group-hover:scale-[1.03] group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:-rotate-1"
        />
      </article>
    </motion.div>
  );
}
