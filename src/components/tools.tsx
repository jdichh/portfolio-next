"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import {
  webTechTools,
  codingTools,
  testingTools,
  designTools,
} from "@/lib/data";
import Image from "next/image";

export default function Tools() {
  return (
    <motion.section
      className="px-6 w-full lg:w-10/12 xl:w-9/12 mb-24 scroll-mt-[2rem] md:scroll-mt-7 lg:scroll-mt-18 xl:scroll-mt-20"
      id="tools"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <SectionHeading>Web Technologies</SectionHeading>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-24">
        {webTechTools.map((tool, index) => (
          <li
            key={index}
            className="flex flex-col text-[#E9E9E9] text-center outline outline-1 outline-[#6E99C4] items-center m-1 p-6 rounded-sm"
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

      <SectionHeading>Coding</SectionHeading>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-24">
        {codingTools.map((tool, index) => (
          <li
            key={index}
            className="flex flex-col text-[#E9E9E9] text-center outline outline-1 outline-[#6E99C4] items-center m-1 p-6 rounded-sm"
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

      <SectionHeading>Testing</SectionHeading>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-24">
        {testingTools.map((tool, index) => (
          <li
            key={index}
            className="flex flex-col text-[#E9E9E9] text-center outline outline-1 outline-[#6E99C4] items-center m-1 p-6 rounded-sm"
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

      <SectionHeading>Design</SectionHeading>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {designTools.map((tool, index) => (
          <li
            key={index}
            className="flex flex-col text-[#E9E9E9] text-center outline outline-1 outline-[#6E99C4] items-center m-1 p-6 rounded-sm"
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
