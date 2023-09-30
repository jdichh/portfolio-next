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
  toolIcons,
  imageUrl,
  liveLink,
  videoLink,
  blogLink,
  githubLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const SCALE = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const OPACITY = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const PROJ_HOVER_SCALE = 1.03;
  const TOOL_ICON_QUALITY = 50;
  const TOOL_ICON_DIMENSIONS = 18;
  const IMAGE_QUALITY = 95;

  return (
    <motion.div
      className="mb-3 last:mb-0"
      ref={ref}
      style={{
        scale: SCALE,
        opacity: OPACITY,
      }}
    >
      <motion.article
        className="group overflow-hidden bg-light-theme-bg hover:bg-[#EDE6DA] rounded-sm relative transition ease-in-out duration-150 outline outline-1 outline-[#111111]"
        whileHover={{ scale: PROJ_HOVER_SCALE }}
        transition={{ duration: 0.01 }}
      >
        <div className="flex flex-col py-4 px-4 md:px-6 md:max-w-[50%] xl:max-w-[55%] md:min-h-[23rem] lg:min-h-[18rem]">
          <Image
            src={imageUrl}
            alt=""
            quality={IMAGE_QUALITY}
            className="block mx-auto relative md:hidden rounded-sm my-2"
          />
          <h3 className="text-center md:text-left text-2xl font-medium">
            {name}
          </h3>
          <ul className="flex flex-wrap my-2 gap-2 justify-center md:justify-start text-sm">
            {tools.map((tool, index) => (
              <li
                key={index}
                className="bg-light-theme-bg group-hover:bg-[#EDE6DA] diamond font-medium transition ease-in-out duration-150 px-2 py-[0.3rem] uppercase tracking-wider rounded-sm flex outline outline-1 outline-[#111111]"
              >
                <Image
                  src={toolIcons[index]}
                  alt=""
                  quality={TOOL_ICON_QUALITY}
                  width={TOOL_ICON_DIMENSIONS}
                  height={TOOL_ICON_DIMENSIONS}
                  className="mr-[0.3rem]"
                />{" "}
                {tool}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed text-left md:text-[17px] font-[450]">
            {description}
          </p>
          <div className="flex flex-col text-center gap-2 mt-4 lg:flex-row lg:flex-wrap font-medium">
            {liveLink && (
              <a
                href={liveLink.toString()}
                target="_blank"
                aria-label="Live demo of the project."
                className="bg-light-theme-bg group-hover:bg-[#EDE6DA] outline outline-1 outline-[#111111] px-3 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-150"
              >
                DEMO
              </a>
            )}
            {videoLink && (
              <a
                href={videoLink.toString()}
                target="_blank"
                aria-label="Video demonstration of the project."
                className="bg-light-theme-bg group-hover:bg-[#EDE6DA] outline outline-1 outline-[#111111] px-3 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-150"
              >
                VIDEO
              </a>
            )}
            {blogLink && (
              <a
                href={blogLink.toString()}
                target="_blank"
                aria-label="Button for my blog post of the project."
                className="bg-light-theme-bg group-hover:bg-[#EDE6DA] outline outline-1 outline-[#111111] px-3 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-150"
              >
                BLOG
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink.toString()}
                target="_blank"
                aria-label="Button for the GitHub repo of the project."
                className="bg-light-theme-bg group-hover:bg-[#EDE6DA] outline outline-1 outline-[#111111] px-3 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-150"
              >
                GITHUB
              </a>
            )}
          </div>
        </div>
        <Image
          src={imageUrl}
          alt=""
          quality={IMAGE_QUALITY}
          className="hidden md:block relative md:absolute transition ease-in-out duration-150 rounded-sm top-7 md:-right-52 lg:-right-16 2xl:-right-1 w-[34rem] md:group-hover:scale-[1.03] md:group-hover:-translate-y-6"
        />
      </motion.article>
    </motion.div>
  );
}
