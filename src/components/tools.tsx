"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { tools, codingTools, testingTools, designTools } from "@/lib/data";

export default function Tools() {
  return (
    <motion.section
      className="px-6 xl:w-8/12 lg:w-1/2 mb-24"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <SectionHeading>Main Tools</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 mb-24">
        {tools.map((tool) => (
          <li
            key={tool.id}
            className="flex text-[#E9E9E9] text-center"
          >
            {tool.name}
          </li>
        ))}
      </div>

      <SectionHeading>Coding Tools</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 mb-24">
        {codingTools.map((codingTool) => (
          <li
            key={codingTool.id}
            className="flex text-[#E9E9E9] text-center"
          >
            {codingTool.name}
          </li>
        ))}
      </div>

      <SectionHeading>Testing Tools</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 mb-24">
        {testingTools.map((testingTool) => (
          <li
            key={testingTool.id}
            className="flex text-[#E9E9E9] text-center"
          >
            {testingTool.name}
          </li>
        ))}
      </div>

      <SectionHeading>Design Tools</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 mb-24">
        {designTools.map((designTool) => (
          <li
            key={designTool.id}
            className="flex text-[#E9E9E9] text-center"
          >
            {designTool.name}
          </li>
        ))}
      </div>

    </motion.section>
  );
}
