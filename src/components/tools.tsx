"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import {
  tools,
} from "@/lib/data";
import Image from "next/image";

export default function Tools() {
  const ICON_DIMENSIONS = 40

  return (
    <motion.section
      className="px-4 w-full xl:w-10/12 mb-16 scroll-mt-20"
      id="tools"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeading>Tools</SectionHeading>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mb-16">
        {tools.map((tool, index) => (
          <li
            key={index}
            className="flex flex-col text-center outline-my-standard text-my-standard theme-switch items-center m-1 p-3 rounded-sm my-transition"
          >
            <Image
              src={tool.imageUrl}
              alt={tool.alt}
              height={ICON_DIMENSIONS}
              width={ICON_DIMENSIONS}
              className="mb-2"
            />
            {tool.name}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
