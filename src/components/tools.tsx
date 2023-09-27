"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import {
  tools,
} from "@/lib/data";
import Image from "next/image";

export default function Tools() {
  return (
    <motion.section
      className="px-6 w-full xl:w-10/12 mb-16 scroll-mt-20"
      id="tools"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <SectionHeading>Tools</SectionHeading>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mb-16">
        {tools.map((tool, index) => (
          <li
            key={index}
            className="flex flex-col text-[#DADADA] text-center bg-[#1F1E26] hover:bg-[#25242D] items-center m-1 p-3 rounded-sm transition ease-in-out duration-100"
          >
            <Image
              src={tool.imageUrl}
              alt={tool.alt}
              height={45}
              width={45}
              className="mb-2"
            />
            {tool.name}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
