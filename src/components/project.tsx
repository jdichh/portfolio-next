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
  githubLink
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const SCALE = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const OPACITY = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const PROJ_HOVER_SCALE = 1.015;
  const BTN_HOVER_SCALE = 1.1
  const ON_TAP_SCALE = 0.95;
  const TOOL_ICON_QUALITY = 50;
  const TOOL_ICON_DIMENSIONS = 20
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
        className="group overflow-hidden bg-[#1F1E26] hover:bg-[#25242D] rounded-md relative transition ease-in-out duration-150 hover:outline hover:outline-1 hover:outline-[#DADADA]"
        whileHover={{ scale: PROJ_HOVER_SCALE }}
        transition={{ duration: 0.01 }}
      >
        <div className="flex flex-col py-4 px-4 md:px-6 md:max-w-[50%] xl:max-w-[55%] md:min-h-[23rem] lg:min-h-[18rem]">
          <Image
            src={imageUrl}
            alt=""
            quality={IMAGE_QUALITY}
            className="block mx-auto relative md:hidden rounded-md my-2"
          />
          <h3 className="text-xl text-center sm:text-2xl md:text-left text-[#DADADA] font-bold">
            {name}
          </h3>
          <ul className="flex flex-wrap my-2 gap-2 text-sm justify-center md:justify-start font-semibold">
            {tools.map((tool, index) => (
              <li
                key={index}
                className="bg-[#1F1E26] transition ease-in-out duration-150 px-3 py-[0.35rem] uppercase tracking-wider rounded-sm flex outline outline-1 outline-[#DADADA]"
              >
                <Image
                  src={toolIcons[index]}
                  alt=""
                  quality={TOOL_ICON_QUALITY}
                  width={TOOL_ICON_DIMENSIONS}
                  height={TOOL_ICON_DIMENSIONS}
                  className="mr-2"
                />{" "}
                {tool}
              </li>
            ))}
          </ul>
          <p className="opacity-90 leading-relaxed text-left md:text-left">{description}</p>
          <div className="flex flex-col text-center gap-2 mt-4 font-bold lg:flex-row lg:flex-wrap">
            {liveLink && (
              <motion.a
                href={liveLink.toString()}
                target="_blank"
                aria-label="Live demo of the project."
                className="bg-[#DADADA] hover:bg-[#6E99C4] px-3 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-150"
                whileHover={{ scale: BTN_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.01 }}
              >
                Demo
              </motion.a>
            )}
            {videoLink && (
              <motion.a
                href={videoLink.toString()}
                target="_blank"
                aria-label="Video demonstration of the project."
                className="bg-[#DADADA] hover:bg-[#6E99C4] px-3 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-150"
                whileHover={{ scale: BTN_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.01 }}
              >
                Video
              </motion.a>
            )}
            {blogLink && (
              <motion.a
                href={blogLink.toString()}
                target="_blank"
                aria-label="Button for my blog post of the project."
                className="bg-[#DADADA] hover:bg-[#6E99C4] px-3 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-150"
                whileHover={{ scale: BTN_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.01 }}
              >
                Blog
              </motion.a>
            )}
            {githubLink && (
              <motion.a
                href={githubLink.toString()}
                target="_blank"
                aria-label="Button for the GitHub repo of the project."
                className="bg-[#DADADA] hover:bg-[#6E99C4] px-3 py-1 md:px-3 md:py-0 text-[#1F1E26] rounded-sm transition ease-in-out duration-150"
                whileHover={{ scale: BTN_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.01 }}
              >
                GitHub
              </motion.a>
            )}
          </div>
        </div>
        <Image
          src={imageUrl}
          alt=""
          quality={IMAGE_QUALITY}
          className="hidden md:block relative md:absolute transition ease-in-out duration-150 rounded-md top-7 md:-right-52 lg:-right-16 2xl:-right-1 w-[34rem] md:group-hover:scale-[1.03] md:group-hover:-translate-y-6"
        />
      </motion.article>
    </motion.div>
  );
}
