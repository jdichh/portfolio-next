"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { HiVideoCamera } from "react-icons/hi";

type ProjectProps = (typeof projects)[number];

export default function Project({
  name,
  description,
  tools,
  toolIcons,
  imageUrl,
  liveLink,
  videoLink,
  githubLink,
}: ProjectProps) {
  const TOOL_ICON_QUALITY = 20;
  const TOOL_ICON_DIMENSIONS = 17;
  const IMAGE_QUALITY = 50;
  const ON_HOVER_SCALE = 1.05;
  const ON_TAP_SCALE = 0.925;

  return (
    <div className="mb-3 last:mb-0">
      <article className="group overflow-hidden rounded-sm relative tools-projects-theme-switch">
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
          <ul className="flex flex-wrap my-2 gap-2 justify-center md:justify-start text-xs font-medium">
            {tools.map((tool, index) => (
              <li
                key={index}
                className=" my-transition px-2 py-[0.3rem] uppercase tracking-wider rounded-sm flex items-center bg-light-theme-bg text-light-theme-text dark:bg-dark-theme-bg dark:text-dark-theme-text"
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
          <p className="leading-relaxed text-left text-my-standard">
            {description}
          </p>
          <div className="flex flex-col text-center gap-2 mt-4 lg:flex-row lg:flex-wrap font-medium">
            {liveLink && (
              <motion.a
                href={liveLink.toString()}
                target="_blank"
                aria-label="Live demo of the project."
                className="project-item-buttons"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
              >
                <SiNetlify size={20} /> <span className="ml-1">Demo</span>
              </motion.a>
            )}
            {videoLink && (
              <motion.a
                href={videoLink.toString()}
                target="_blank"
                aria-label="Video demonstration of the project."
                className="project-item-buttons"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
              >
                <HiVideoCamera size={20} /> <span className="ml-1">Video</span>
              </motion.a>
            )}
            {githubLink && (
              <motion.a
                href={githubLink.toString()}
                target="_blank"
                aria-label="Button for the source code of the project."
                className="project-item-buttons"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
              >
                <AiFillGithub size={20} />{" "}
                <span className="ml-1">Source Code</span>
              </motion.a>
            )}
          </div>
        </div>
        <Image
          src={imageUrl}
          alt=""
          quality={IMAGE_QUALITY}
          className="hidden md:block relative md:absolute my-transition rounded-sm top-7 md:-right-52 lg:-right-16 2xl:-right-1 w-[34rem] -translate-y-7"
        />
      </article>
    </div>
  );
}
