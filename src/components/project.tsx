import { projects } from "@/lib/data";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { HiVideoCamera } from "react-icons/hi";
import { FaBlog } from "react-icons/fa";

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

  const TOOL_ICON_QUALITY = 50;
  const TOOL_ICON_DIMENSIONS = 17;
  const IMAGE_QUALITY = 30;
  const ON_PROJ_ITEM_SCALE = 1.02;
  const ON_HOVER_SCALE = 1.05;
  const ON_TAP_SCALE = 0.925;

  return (
    <motion.div
      className="mb-3 last:mb-0"
      ref={ref}
      style={{
        scale: SCALE,
        opacity: OPACITY,
      }}
    >
      <article className="group overflow-hidden bg-light-theme-bg text-light-theme-text dark:bg-dark-theme-bg dark:text-dark-theme-text rounded-sm relative my-transition outline-my-standard">
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
                className="bg-light-theme-bg text-light-theme-text dark:bg-dark-theme-bg dark:text-dark-theme-text my-transition px-2 py-[0.3rem] uppercase tracking-wider rounded-sm flex items-center outline-my-standard"
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
                transition={{ duration: 0 }}
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
                transition={{ duration: 0 }}
              >
                <HiVideoCamera size={20} /> <span className="ml-1">Video</span>
              </motion.a>
            )}
            {/* {blogLink && (
              <motion.a
                href={blogLink.toString()}
                target="_blank"
                aria-label="Blog post of the project."
                className="project-item-buttons"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0 }}
              >
                <FaBlog /> <span className="ml-1">Blog</span>
              </motion.a>
            )} */}
            {githubLink && (
              <motion.a
                href={githubLink.toString()}
                target="_blank"
                aria-label="Button for the source code of the project."
                className="project-item-buttons"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0 }}
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
    </motion.div>
  );
}
